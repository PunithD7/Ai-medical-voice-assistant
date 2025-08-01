import React from 'react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { SessionDetail } from '../medical-agent/[sessionId]/page'
import moment from 'moment'

type props={
    record:SessionDetail
}

function ViewReportDialog({record}: props) {
  return (
    <Dialog>
  <DialogTrigger>
    <Button variant={'link'} size={'sm'}>View Report</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
  <DialogTitle asChild>
    <h2 className="text-center text-4xl text-blue-700">🩺 Medical AI Voice Assistant Report</h2>
  </DialogTitle>
  <DialogDescription asChild>
    <div className="w-full max-w-4xl mx-auto p-6 overflow-y-auto" style={{ maxHeight: '80vh' }}>
      <div className="mt-10 space-y-6">

        {/* Session Info */}
        <section>
          <h2 className="font-bold text-blue-500 text-lg mb-2">Session Info:</h2>
          <div className="grid grid-cols-2 gap-4">
            <p><span className="font-bold">Doctor Specialization:</span> {record.selectedDoctor?.specialist}</p>
            <p><span className="font-bold">Consulted Date:</span> {moment(new Date(record?.createdOn)).fromNow()}</p>
            <p><span className="font-bold">User:</span> {record?.report.user}</p>
            <p><span className="font-bold">Agent:</span> {record?.report.agent}</p>
          </div>
          <hr className="border-blue-400 mt-4" />
        </section>

        {/* Report */}
        <section>
          <h2 className="font-bold text-blue-500 text-lg mb-2">Report:</h2>
          <p className="text-gray-700">{record?.notes}</p>
          <hr className="border-blue-400 mt-4" />
        </section>

        {/* Summary */}
        <section>
          <h2 className="font-bold text-blue-500 text-lg mb-2">Summary:</h2>
          <p>{record?.report.summary}</p>
          <hr className="border-blue-400 mt-4" />
        </section>

        {/* Symptoms */}
        <section>
          <h2 className="font-bold text-blue-500 text-lg mb-2">Symptoms:</h2>
          <p>{Array.isArray(record?.report.symptoms) ? record.report.symptoms.join(', ') : record?.report.symptoms}</p>
          <hr className="border-blue-400 mt-4" />
        </section>

        {/* Duration and Severity */}
        <section className="grid grid-cols-2 gap-4">
          <p><span className="font-bold">Duration:</span> {record?.report.duration}</p>
          <p><span className="font-bold">Severity:</span> {record?.report.severity}</p>
          <hr className="border-blue-400 col-span-2 mt-4" />
        </section>

        {/* Medications Mentioned */}
        <section>
          <h2 className="font-bold text-blue-500 text-lg mb-2">Medications Mentioned:</h2>
          <p>{Array.isArray(record?.report.medicationsMentioned) ? record.report.medicationsMentioned.join(', ') : record?.report.medicationsMentioned}</p>
          <hr className="border-blue-400 mt-4" />
        </section>

        {/* Recommendations */}
        <section>
          <h2 className="font-bold text-blue-500 text-lg mb-2">Recommendations:</h2>
          <p>{Array.isArray(record?.report.recommendations) ? record.report.recommendations.join(', ') : record?.report.recommendations}</p>
        </section>

      </div>
    </div>
  </DialogDescription>
</DialogHeader>

  </DialogContent>
</Dialog>

  )
}

export default ViewReportDialog
