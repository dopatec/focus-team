import { useState } from "react"
    import { Link } from "react-router-dom"
    import { Button } from "../components/ui/button"
    import { Input } from "../components/ui/input"
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
    import { FaCalendar, FaClock, FaUsers, FaBolt } from "react-icons/fa"

    export default function SessionPage() {
      const [documentation, setDocumentation] = useState({
        timeFrames: [],
        participants: [],
        subjects: [],
        date: new Date().toISOString().split("T")[0], // Default to today's date
      })
      const [boardContent, setBoardContent] = useState([])
      const [tasks, setTasks] = useState([])
      const [newParticipant, setNewParticipant] = useState("")

      const handleAddDocumentation = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newEntry = {
          timeFrame: formData.get("timeFrame"),
          subject: formData.get("subject"),
        }
        setDocumentation((prev) => ({
          ...prev,
          timeFrames: [...prev.timeFrames, newEntry.timeFrame],
          subjects: [...prev.subjects, newEntry.subject],
        }))
        setBoardContent((prev) => [
          ...prev,
          { id: prev.length + 1, label: newEntry.subject },
        ])
        e.target.reset()
      }

      const handleAddParticipant = (e) => {
        e.preventDefault()
        if (newParticipant.trim()) {
          setDocumentation((prev) => ({
            ...prev,
            participants: [...prev.participants, newParticipant.trim()],
          }))
          setNewParticipant("")
        }
      }

      const handleAddTask = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const newTask = {
          id: tasks.length + 1,
          title: formData.get("taskTitle"),
          assignedTo: formData.get("assignedTo"),
          status: "todo",
        }
        setTasks((prev) => [...prev, newTask])
        e.target.reset()
      }

      return (
        <div className="min-h-screen bg-background">
          <nav className="container flex items-center justify-between py-6">
            <h1 className="text-2xl font-bold">Session</h1>
            <div className="flex gap-4">
              <Link to="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Button>Logout</Button>
            </div>
          </nav>

          <main className="container py-12 space-y-8">
            {/* Documentation Module */}
            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>
                  Track time frames, participants, and subjects for this session
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Date Input */}
                  <div className="space-y-2">
                    <label htmlFor="sessionDate">Session Date</label>
                    <Input
                      id="sessionDate"
                      type="date"
                      value={documentation.date}
                      onChange={(e) =>
                        setDocumentation((prev) => ({
                          ...prev,
                          date: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>

                  {/* Add Participants */}
                  <div className="space-y-2">
                    <label>Participants</label>
                    <form
                      className="flex gap-2"
                      onSubmit={handleAddParticipant}
                    >
                      <Input
                        placeholder="Enter participant name"
                        value={newParticipant}
                        onChange={(e) => setNewParticipant(e.target.value)}
                      />
                      <Button type="submit">Add Participant</Button>
                    </form>
                    <ul className="mt-2 space-y-1">
                      {documentation.participants.map((participant, index) => (
                        <li key={index} className="text-sm">
                          {participant}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Add Documentation Entry */}
                  <form className="space-y-4" onSubmit={handleAddDocumentation}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="timeFrame">Time Frame</label>
                        <Input
                          id="timeFrame"
                          name="timeFrame"
                          type="time"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="subject">Subject</label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="Enter subject"
                          required
                        />
                      </div>
                    </div>
                    <Button className="w-full" type="submit">
                      Add Entry
                    </Button>
                  </form>

                  {/* Session Details */}
                  <div className="mt-4">
                    <h3 className="font-semibold">Session Details</h3>
                    <p>Date: {documentation.date}</p>
                    <ul className="mt-2 space-y-2">
                      {documentation.timeFrames.map((timeFrame, index) => (
                        <li key={index}>
                          {timeFrame} - {documentation.subjects[index]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Board Module */}
            <Card>
              <CardHeader>
                <CardTitle>Board</CardTitle>
                <CardDescription>
                  Visualize the session flow as a flowchart
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 overflow-x-auto p-4">
                  {boardContent.map((item) => (
                    <div
                      key={item.id}
                      className="min-w-[200px] p-4 border rounded-lg bg-secondary"
                    >
                      {item.label}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Taskboard Module */}
            <Card>
              <CardHeader>
                <CardTitle>Taskboard</CardTitle>
                <CardDescription>
                  Assign and manage tasks for participants
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleAddTask}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="taskTitle">Task Title</label>
                      <Input
                        id="taskTitle"
                        name="taskTitle"
                        placeholder="Enter task title"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="assignedTo">Assigned To</label>
                      <select
                        id="assignedTo"
                        name="assignedTo"
                        className="w-full p-2 border rounded-md"
                        required
                      >
                        <option value="">Select Participant</option>
                        {documentation.participants.map((participant, index) => (
                          <option key={index} value={participant}>
                            {participant}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <Button className="w-full" type="submit">
                    Add Task
                  </Button>
                </form>
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold">To Do</h3>
                    <ul className="space-y-2">
                      {tasks
                        .filter((task) => task.status === "todo")
                        .map((task) => (
                          <li key={task.id} className="p-2 border rounded-lg">
                            {task.title} (Assigned to: {task.assignedTo})
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">In Progress</h3>
                    <ul className="space-y-2">
                      {tasks
                        .filter((task) => task.status === "inProgress")
                        .map((task) => (
                          <li key={task.id} className="p-2 border rounded-lg">
                            {task.title} (Assigned to: {task.assignedTo})
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold">Done</h3>
                    <ul className="space-y-2">
                      {tasks
                        .filter((task) => task.status === "done")
                        .map((task) => (
                          <li key={task.id} className="p-2 border rounded-lg">
                            {task.title} (Assigned to: {task.assignedTo})
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      )
    }
