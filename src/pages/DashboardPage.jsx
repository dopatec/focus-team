import { Link } from "react-router-dom"
    import { Button } from "../components/ui/button"
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"
    import { FaCalendar, FaClock, FaUsers, FaBolt } from "react-icons/fa"

    export default function DashboardPage() {
      return (
        <div className="min-h-screen bg-background">
          <nav className="container flex items-center justify-between py-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <div className="flex gap-4">
              <Link to="/">
                <Button variant="ghost">Home</Button>
              </Link>
              <Button>Logout</Button>
            </div>
          </nav>

          <main className="container py-12">
            <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <FaCalendar className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    View and manage your scheduled focus sessions
                  </CardDescription>
                  <Link to="/session">
                    <Button className="mt-4 w-full">View Sessions</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FaClock className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Time Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track your focus time and productivity
                  </CardDescription>
                  <Button className="mt-4 w-full">Start Timer</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FaUsers className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Invite and manage your team members
                  </CardDescription>
                  <Button className="mt-4 w-full">Manage Team</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FaBolt className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Focus Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Analyze your focus patterns and productivity
                  </CardDescription>
                  <Button className="mt-4 w-full">View Analytics</Button>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      )
    }
