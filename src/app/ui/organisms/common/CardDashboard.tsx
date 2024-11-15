import React from "react";
import Container from "./Container";

interface CardDashboardProps {
  title: string;
  number: number | string;
  icon: React.ReactNode;
}

export default function CardDashboard({
  title,
  number,
  icon,
}: CardDashboardProps) {
  return (
    <Container>
      <div className="flex justify-between text-left pt-6 pr-6 pl-6">
        <h3>{title}</h3>
        <span>{icon}</span>
      </div>
      <p className="text-3xl font-extrabold pb-6 pl-6">{number}</p>
    </Container>
  );
}
