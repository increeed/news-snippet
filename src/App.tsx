import React from "react";
import "antd/dist/reset.css";
import NewsSnippet from "./NewsSnippet";
import { IData_SnippetNews } from "./types";

const mockData: IData_SnippetNews[] = [
  {
    ID: 260855433,
    TI: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones",
    AB: "Mobile bankers left vulnerable: 47% of UK consumers manage finances on insecure smartphones\\nAugust 2020 by Kaspersky\\nNew research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by Kaspersky, nearly half (47%) of smartphone owners who use a banking app don't protect their mobile device with its antivirus or security sof...",
    URL: "https://www.globalsecuritymag.com/Mobile-bankers-left-vulnerable-47,20200819,101946.html",
    DOM: "globalsecuritymag.com",
    DP: "2023-08-06T11:00:00",
    SENT: "negative",
    LANG: "en",
    AU: ["John Doe", "Jane Smith"],
    FAV: "/favicons/e5d69d9c71ab539384fcc63062efdd8d.png",
    KW: [
      { value: "antivirus", count: 10 },
      { value: "kaspersky", count: 5 },
      { value: "new", count: 1 },
    ],
    HIGHLIGHTS: [
      "<b>Kaspersky</b> <b>New</b> research has revealed that UK consumers carry out online banking on smartphones and devices that are potentially vulnerable to a security breach, despite making sure they keep their desktop or laptop computers safe. In a study commissioned by <b>Kaspersky</b>.",
      "with <b>antivirus</b> or security software. More than half (58%) of UK smartphone owners who access bank accounts with their mobile device are worried about their banking app being hacked if their phone was lost or stolen. Despite that fear, 47%[2] are banking on devices without <b>antivirus</b>.",
      "home with <b>antivirus</b> protection. Surprisingly, one fifth (21%) of adults overall, and one third (33%) of Generation Z, believe their phone can't be hacked, despite the level of mobile malware attacks rising over the past 12 months. Around two-in-five of those without <b>antivirus</b> and s..."
    ],
    REACH: 2392,
    CNTR: "France",
    CNTR_CODE: "fr",
    TRAFFIC: [
      { value: "India", count: 0.779 },
      { value: "United States of America", count: 0.101 },
      { value: "Mexico", count: 0.036 },
    ],
  },
  {
    ID: 260855434,
    TI: "New Study Shows Increase in Cybersecurity Threats",
    AB: "A new study reveals a significant increase in cybersecurity threats across the globe. Experts warn that businesses and individuals need to take immediate action to protect their data.",
    URL: "https://example.com/cybersecurity-threats",
    DOM: "example.com",
    DP: "2023-08-07T10:00:00",
    SENT: "negative",
    LANG: "en",
    AU: ["Alice Johnson"],
    FAV: "/favicons/example.png",
    KW: [
      { value: "cybersecurity", count: 8 },
      { value: "threats", count: 6 },
    ],
    HIGHLIGHTS: [
      "<b>Cybersecurity</b> threats are on the rise, with experts urging immediate action.",
      "Businesses and individuals must protect their data from <b>threats</b>."
    ],
    REACH: 1500,
    CNTR: "United States",
    CNTR_CODE: "us",
    TRAFFIC: [
      { value: "United States", count: 0.5 },
      { value: "Canada", count: 0.3 },
    ],
  },
  {
    ID: 260855435,
    TI: "Tech Giants Announce New AI Innovations",
    AB: "Leading tech companies have announced groundbreaking AI innovations that promise to revolutionize the industry.",
    URL: "https://example.com/ai-innovations",
    DOM: "example.com",
    DP: "2023-08-08T09:00:00",
    SENT: "positive",
    LANG: "en",
    AU: ["Bob Wilson"],
    FAV: "/favicons/example.png",
    KW: [
      { value: "AI", count: 7 },
      { value: "innovation", count: 4 },
    ],
    HIGHLIGHTS: [
      "<b>AI</b> innovations are set to revolutionize the tech industry.",
      "Leading companies announce <b>innovation</b> in artificial intelligence."
    ],
    REACH: 2000,
    CNTR: "Germany",
    CNTR_CODE: "de",
    TRAFFIC: [
      { value: "Germany", count: 0.6 },
      { value: "France", count: 0.4 },
    ],
  }
];

function App() {
  return (
    <div style={{ background: '#232a36', minHeight: '100vh', padding: 32 }}>
      {mockData.map(news => (
        <NewsSnippet key={news.ID} data={news} />
      ))}
    </div>
  );
}

export default App;
