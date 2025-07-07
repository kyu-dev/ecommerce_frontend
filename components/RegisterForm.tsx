import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Register</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to create your account
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Register
        </Button>
        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <img //faut pas le dire ça vient de wikipedia
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/2506px-Google_Favicon_2025.svg.png"
            alt="Google logo"
            className="mr-2 h-4 w-4"
          />
          Sign up with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <a href="/auth/login" className="underline underline-offset-4">
          Sign in
        </a>
      </div>
    </form>
  );
}
