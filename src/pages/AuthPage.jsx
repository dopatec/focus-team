import { useState } from "react"
    import { Link, useNavigate } from "react-router-dom"
    import { Button } from "../components/ui/button"
    import { Input } from "../components/ui/input"
    import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card"

    export default function AuthPage() {
      const [isSignUp, setIsSignUp] = useState(false)
      const [email, setEmail] = useState("")
      const [password, setPassword] = useState("")
      const navigate = useNavigate()

      const handleSubmit = (e) => {
        e.preventDefault()
        // Mock authentication logic
        if (email && password) {
          // Redirect to dashboard after successful login/signup
          navigate("/dashboard")
        }
      }

      return (
        <div className="min-h-screen bg-background flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>{isSignUp ? "Sign Up" : "Sign In"}</CardTitle>
              <CardDescription>
                {isSignUp
                  ? "Create a new account to get started"
                  : "Welcome back! Please sign in to continue"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                {isSignUp && (
                  <div className="space-y-2">
                    <label htmlFor="name">Name</label>
                    <Input id="name" placeholder="Enter your name" required />
                  </div>
                )}
                <div className="space-y-2">
                  <label htmlFor="email">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="password">Password</label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button className="w-full" type="submit">
                  {isSignUp ? "Sign Up" : "Sign In"}
                </Button>
              </form>
              <div className="mt-4 text-center text-sm">
                {isSignUp ? (
                  <>
                    Already have an account?{" "}
                    <Button
                      variant="link"
                      className="p-0"
                      onClick={() => setIsSignUp(false)}
                    >
                      Sign In
                    </Button>
                  </>
                ) : (
                  <>
                    Don't have an account?{" "}
                    <Button
                      variant="link"
                      className="p-0"
                      onClick={() => setIsSignUp(true)}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )
    }
