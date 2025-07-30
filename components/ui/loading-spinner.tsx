interface LoadingSpinnerProps {
  message?: string;
  size?: "sm" | "md" | "lg";
}

export function LoadingSpinner({
  message = "Chargement...",
  size = "md",
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "h-4 w-4",
    md: "h-8 w-8",
    lg: "h-12 w-12",
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div
          className={`animate-spin rounded-full border-b-2 border-gray-900 mx-auto mb-4 ${sizeClasses[size]}`}
        />
        <p className="text-muted-foreground">{message}</p>
      </div>
    </div>
  );
}
