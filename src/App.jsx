import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom"
    import { Button } from "./components/ui/button"
    import { Input } from "./components/ui/input"
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./components/ui/card"
    import { FaCalendar, FaClock, FaUsers, FaBolt } from "react-icons/fa"
    import AuthPage from "./pages/AuthPage"
    import DashboardPage from "./pages/DashboardPage"
    import SessionPage from "./pages/SessionPage"

    // Mock authentication state
    const isAuthenticated = true // Replace with actual authentication logic

    export default function App() {
      return (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? <DashboardPage /> : <Navigate to="/auth" />
              }
            />
            <Route
              path="/session"
              element={
                isAuthenticated ? <SessionPage /> : <Navigate to="/auth" />
              }
            />
          </Routes>
        </Router>
      )
    }

    function HomePage() {
      return (
        <div className="min-h-screen bg-background">
          <nav className="container flex items-center justify-between py-6">
            <h1 className="text-2xl font-bold">FocusSession</h1>
            <div className="flex gap-4">
              <Link to="/auth">
                <Button variant="ghost">Login</Button>
              </Link>
              <Button>Get Started</Button>
            </div>
          </nav>

          <main className="container py-24">
            <section className="text-center space-y-6">
              <h1 className="text-5xl font-bold tracking-tight">
                Boost Your Team's Productivity
              </h1>
              <p className="text-xl text-muted-foreground">
                Collaborative focus sessions that keep your team in the zone
              </p>
              <div className="flex gap-4 justify-center">
                <Input placeholder="Enter your email" className="max-w-sm" />
                <Button>Join Waitlist</Button>
              </div>
            </section>

            <section className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card>
                <CardHeader>
                  <FaCalendar className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Sessions</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Plan and schedule focus sessions with your team
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FaClock className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Time Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Stay focused with built-in Pomodoro timers
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FaUsers className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Team Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Work together in real-time with your team
                  </CardDescription>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FaBolt className="w-8 h-8 mb-2 text-primary" />
                  <CardTitle>Focus Analytics</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Track and improve your team's focus patterns
                  </CardDescription>
                </CardContent>
              </Card>
            </section>
          </main>
        </div>
      )
    }
