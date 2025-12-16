
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
    title: string;
    description: React.ReactNode;
    icon?: React.ReactNode;
    className?: string;
}

export function FeatureCard({ title, description, icon, className }: FeatureCardProps) {
    return (
        <Card className={cn(
            "bg-card/50 backdrop-blur-sm border-white/10 overflow-hidden hover:border-primary/50 transition-colors duration-300 group h-full",
            className
        )}>
            <CardHeader className="space-y-3">
                <div className="flex items-center gap-3">
                    {icon && <div className="text-primary group-hover:scale-110 transition-transform duration-300">{icon}</div>}
                    <CardTitle className="text-xl leading-tight">{title}</CardTitle>
                </div>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {description}
                </CardDescription>
            </CardHeader>
        </Card>
    );
}
