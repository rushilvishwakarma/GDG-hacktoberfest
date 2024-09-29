import { useEffect, useState } from 'react';
import { Card, CardContent } from '~/components/ui/card'; // Importing from shadcn
import { BorderBeam } from '~/components/ui/border-beam';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  
  // State to track the current value for animations
  const [animatedValues, setAnimatedValues] = useState(timeRemaining);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date().getTime();
      const timeDiff = targetDate.getTime() - now;

      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setAnimatedValues(timeRemaining); // Set previous values for animation
      setTimeRemaining({ days, hours, minutes, seconds });
    };

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <Card className="w-full">
      <BorderBeam
        size={200}
        duration={12}
        delay={7}
        colorFrom="var(--color-one)"
        colorTo="var(--color-two)"
      />
      <CardContent className="pt-7 md:mt-7 md:mb-7">
        <div className="grid grid-cols-4 gap-4 text-center">
          {/* Days */}
          <div className="flex flex-col items-center">
            <div
              className="text-4xl md:text-5xl font-bold"
              style={{
                transform: animatedValues.days !== timeRemaining.days ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              {timeRemaining.days}
            </div>
            <div className="text-sm text-muted-foreground mt-2">Days</div>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center">
            <div
              className="text-4xl md:text-5xl font-bold"
              style={{
                transform: animatedValues.hours !== timeRemaining.hours ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              {timeRemaining.hours}
            </div>
            <div className="text-sm text-muted-foreground mt-2">Hours</div>
          </div>

          {/* Minutes */}
          <div className="flex flex-col items-center">
            <div
              className="text-4xl md:text-5xl font-bold"
              style={{
                transform: animatedValues.minutes !== timeRemaining.minutes ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              {timeRemaining.minutes}
            </div>
            <div className="text-sm text-muted-foreground mt-2">Minutes</div>
          </div>

          {/* Seconds */}
          <div className="flex flex-col items-center">
            <div
              className="text-4xl md:text-5xl font-bold"
              style={{
                transform: animatedValues.seconds !== timeRemaining.seconds ? 'scale(1.2)' : 'scale(1)',
                transition: 'transform 0.3s ease-in-out',
              }}
            >
              {timeRemaining.seconds}
            </div>
            <div className="text-sm text-muted-foreground mt-2">Seconds</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CountdownTimer;
