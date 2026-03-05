import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Trophy, Award, Target, Users, Code, Star } from "lucide-react";

export function Achievements() {
  const achievements = [];

  const stats = [];

  return (
    <div className="mb-8">
      <h2 className="mb-6">Logros y Reconocimientos</h2>

      {/* Estadísticas */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <Card key={index} className="text-center">
            <CardContent className="pt-6">
              <div className="text-2xl font-bold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Logros */}
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((achievement, index) => (
          <Card
            key={index}
            className={`transition-all hover:shadow-lg ${achievement.bgColor}`}
          >
            <CardHeader className="pb-3">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">{achievement.icon}</div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg leading-tight">
                      {achievement.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {achievement.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {achievement.date}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-muted-foreground">{achievement.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
