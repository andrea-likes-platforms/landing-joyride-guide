import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";

interface NavigationCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
  className?: string;
}

const NavigationCard = ({ title, description, href, icon, className }: NavigationCardProps) => {
  return (
    <Link to={href} className="group">
      <Card className={cn(
        "p-6 h-full transition-all duration-200 hover:shadow-card-hover hover:bg-card-hover border border-border",
        "group-hover:scale-[1.02] cursor-pointer",
        className
      )}>
        <div className="flex flex-col items-center text-center space-y-4">
          {icon && (
            <div className="w-12 h-12 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
              {icon}
            </div>
          )}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-card-foreground group-hover:text-accent transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default NavigationCard;