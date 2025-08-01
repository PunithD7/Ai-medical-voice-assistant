'use client';

import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { doctorAgent } from '../../_components/DoctorAgentCard';
import { Circle, Loader, PhoneCall, PhoneOff } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Vapi from '@vapi-ai/web';
import { toast } from 'sonner';

export type ReportData = {
  symptoms: string;
  recommendations: string;
  summary: string;
  user?: string;
  agent?: string;
  duration?: string;
  severity?: string;
  medicationsMentioned?: string;
  [key: string]: any; // optional, catches extra fields
};

export type SessionDetail = {
  id: number;
  notes: string;
  sessionId: string;
  //report: JSON;
  selectedDoctor: doctorAgent;
  createdOn: string;
  report: ReportData;

};

type messages = {
  role: string;
  text: string;
};

function MedicalVoiceAgent() {
  const { sessionId } = useParams();
  const router = useRouter();
  const [sessionDetail, setSessionDetail] = useState<SessionDetail>();
  const [callStarted, setCallStarted] = useState(false);
  const [vapiInstance, setVapiInstance] = useState<any>();
  const [currentRoll, setCurrentRoll] = useState<string | null>();
  const [liveTranscript, setLiveTranscript] = useState<string>();
  const [messages, setMessages] = useState<messages[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (sessionId) GetSessionDetails();
  }, [sessionId]);

  const GetSessionDetails = async () => {
    try {
      const result = await axios.get('/api/session-chat?sessionId=' + sessionId);
      setSessionDetail(result.data);
    } catch (err) {
      console.error('Failed to fetch session details:', err);
      toast.error('Failed to fetch session.');
    }
  };

  const StartCall = () => {
    setLoading(true);
    const vapi = new Vapi(process.env.NEXT_PUBLIC_VAPI_API_KEY!);
    setVapiInstance(vapi);

    vapi.start(process.env.NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID);

    vapi.on('call-start', () => {
      console.log('Call started');
      setCallStarted(true);
    });

    vapi.on('call-end', () => {
      setCallStarted(false);
      console.log('Call ended');
    });

    vapi.on('message', (message) => {
      if (message.type === 'transcript') {
        const { role, transcriptType, transcript } = message;
        console.log(`${role}: ${transcript}`);

        if (transcriptType === 'partial') {
          setLiveTranscript(transcript);
          setCurrentRoll(role);
        } else if (transcriptType === 'final') {
          setMessages((prev) => [...prev, { role, text: transcript }]);
          setLiveTranscript('');
          setCurrentRoll(null);
        }
      }
    });

    vapi.on('speech-start', () => {
      console.log('Assistant speaking...');
      setCurrentRoll('assistant');
    });

    vapi.on('speech-end', () => {
      console.log('Assistant done.');
      setCurrentRoll('user');
    });
  };

  const endCall = async () => {
    const result = await GenerateReport();

    if (vapiInstance) {
      await vapiInstance.stop();
      vapiInstance.off('call-start');
      vapiInstance.off('call-end');
      vapiInstance.off('message');
      vapiInstance.off('speech-start');
      vapiInstance.off('speech-end');
      setVapiInstance(null);
    }

    setCallStarted(false);
    toast.success('Call ended and report generated!');
    router.replace('/dashboard');
  };

  const GenerateReport = async () => {
    setLoading(true);
    try {
      const result = await axios.post('/api/medical-report', {
        messages,
        sessionDetail,
        sessionId,
      });
      return result.data;
    } catch (err) {
      toast.error('Failed to generate report.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='p-5 border rounded-3xl mt-3 bg-gradient-to-br from-teal-100 to-green-200 p-8 rounded-2xl'>
      <div className='flex justify-between items-center'>
        <h2 className='p-1 px-2 border rounded-md flex gap-3 items-center'>
          <Circle className={`h-4 w-4 rounded-full ${callStarted ? 'bg-green-500' : 'bg-red-500'}`} />
          {callStarted ? 'Connected...' : 'Not Connected'}
        </h2>
        <h2 className='font-bold text-xl text-gray-400'>00:00</h2>
      </div>

      {sessionDetail && (
        <div className='flex items-center flex-col mt-10'>
          <Image
            src={sessionDetail?.selectedDoctor?.image}
            alt={sessionDetail?.selectedDoctor?.specialist ?? ''}
            width={120}
            height={120}
            className='h-[100px] w-[100px] object-cover rounded-full'
          />
          <h2 className='mt-2 text-lg'>{sessionDetail?.selectedDoctor?.specialist}</h2>
          <p className='text-sm text-gray-400'>AI Medical Voice Assistant</p>

          <div className='mt-12 overflow-y-auto flex flex-col items-center px-10 md:px-28 lg:px-52 xl:px-72'>
            {messages?.slice(-4).map((msg, index) => (
              <h2 className='text-gray-400 p-2' key={index}>
                {msg.role} : {msg.text}
              </h2>
            ))}
            {liveTranscript && (
              <h2 className='text-lg'>
                {currentRoll} : {liveTranscript}
              </h2>
            )}
          </div>

          {!callStarted ? (
            <Button className='mt-20' onClick={StartCall} disabled={loading}>
              {loading ? <Loader className='animate-spin' /> : <PhoneCall />} Start Call
            </Button>
          ) : (
            <Button variant='destructive' onClick={endCall}>
              <PhoneOff /> Disconnect
            </Button>
          )}
        </div>
      )}
    </div>
  );
}

export default MedicalVoiceAgent;
