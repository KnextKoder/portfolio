import { Briefcase } from "lucide-react"

interface WorkExperience {
  period: string
  company: string
  companyColor: string
  role: string
  focus: string
  achievements: string[]
}

const experiences: WorkExperience[] = [
  {
    period: "2022 - Present",
    company: "Amazon",
    companyColor: "#008296",
    role: "Senior Software Engineer",
    focus: "Building the future of e-commerce",
    achievements: [
      "Developed a new feature that improves the shopping experience",
      "Implemented a recommendation algorithm to suggest products",
      "Enhanced the checkout process making it more intuitive and user-friendly",
      "Built a feature for tracking packages in real-time",
    ],
  },
  {
    period: "2021 - 2022",
    company: "Google",
    companyColor: "#34A853",
    role: "Senior Software Engineer",
    focus: "Building the future of search",
    achievements: [
      "Improved the search algorithm to provide more relevant results",
      "Developed a new feature that personalizes search results",
      "Enhanced the search functionality making it more intuitive and user-friendly",
      "Implemented a feature for tracking search history",
    ],
  },
  {
    period: "2020 - 2021",
    company: "Facebook",
    companyColor: "#0866FF",
    role: "Senior Software Engineer",
    focus: "Building the future of social networking",
    achievements: [
      "Developed a new feature that improves the user experience",
      "Implemented a recommendation algorithm to suggest friends",
      "Enhanced the news feed algorithm to show more relevant posts",
      "Built a feature for tracking user activity",
    ],
  },
]

export default function Resume() {
  return (
    <main className="max-w-4xl w-full mx-auto py-20 px-4 md:px-10">
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="w-8 h-8" />
        <h1 className="text-4xl font-bold">Work History</h1>
      </div>

      <p className="text-gray-600 mb-12">
        I&apos;m a full-stack developer that loves building products and web apps that can impact millions of lives
      </p>

      <div className="space-y-16">
        {experiences.map((exp) => (
          <div key={exp.company} className="grid grid-cols-[1fr,3fr] gap-8">
            <div className="text-gray-500">{exp.period}</div>
            <div>
              <h3 className="text-xl font-semibold mb-1" style={{ color: exp.companyColor }}>
                {exp.company}
              </h3>
              <h4 className="text-lg font-medium mb-1">{exp.role}</h4>
              <p className="text-gray-600 mb-4">{exp.focus}</p>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-300" />
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

