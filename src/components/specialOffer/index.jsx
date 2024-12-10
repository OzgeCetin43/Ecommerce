import { useState, useEffect, useRef } from "react";
import { Card, Layout, Typography } from "antd";

import "./special-offer.css";

const { Content } = Layout;
const { Text } = Typography;

export const SpecialOffer = () => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Feb 12, 2026 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = countDownDate - now;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      if (diff < 0) {
        clearInterval(interval);
      } else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();

    return () => clearInterval(interval);
  }, []);

  return (
    <Content className="special-offer-container">
      <Card className="special-offer-card">
        <Text className="special-offer-text">
          {days > 9 ? days : `0${days}`}
        </Text>
        <Text className="special-offer-description-text">Days</Text>
      </Card>
      <Text className="special-offer-divider-text">:</Text>
      <Card className="special-offer-card">
        <Text className="special-offer-text">
          {hours > 9 ? hours : `0${hours}`}
        </Text>
        <Text className="special-offer-description-text">Hours</Text>
      </Card>
      <Text className="special-offer-divider-text">:</Text>
      <Card className="special-offer-card">
        <Text className="special-offer-text">
          {minutes > 9 ? minutes : `0${minutes}`}
        </Text>
        <Text className="special-offer-description-text">Minutes</Text>
      </Card>
      <Text className="special-offer-divider-text">:</Text>
      <Card className="special-offer-card">
        <Text className="special-offer-text">
          {seconds > 9 ? seconds : `0${seconds}`}
        </Text>
        <Text className="special-offer-description-text">Seconds</Text>
      </Card>
    </Content>
  );
};
