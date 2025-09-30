export default function Home() {
  const front = ["F", "r", "o", "n", "t"];
  const end = ["e", "n", "d"];
  const developer = ["D", "e", "v", "e", "l", "o", "p", "e", "r"];
  const description = [
    "About   I am a front-end developer focused on creating interactive digital experiences on the web . I have more than 3 years of experience building and maintaining responsive websites . My expertise lies in HTML , CSS , JavaScript , and modern frameworks like React , Nextjs and Vue.js . I am passionate about web accessibility and performance optimization .",
  ];
  return (
    <div className="bg-background">
      {front.map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
      <span> - </span>
      {end.map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </div>
  );
}
