export function trimText(input: string, maxLength: number = 100): string {
  if (input.length <= maxLength) return input;
  return input.substring(0, maxLength - 3) + "...";
}

export function getCurrentTimeInIndia(): Date {
  const now = new Date();
  const offsetIndia = 5.5; // UTC offset for Indian Standard Time (IST) is UTC+5:30

  now.setHours(now.getUTCHours() + offsetIndia); // Adjust hours for the time zone offset
  return now;
}

export function formatTimeForIndia(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true, // Format time in 12-hour format with AM/PM
    timeZone: "Asia/Kolkata", // Use the time zone identifier for Indian Standard Time (IST)
  };

  let formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);

  // Append "IST" to indicate Indian Standard Time
  formattedTime += " IST";

  return formattedTime;
}

export function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("en-US", options).format(date);
}
