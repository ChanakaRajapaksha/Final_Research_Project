import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

const Milestones = () => {
  const cardsData = [
    {
      title: "Project Proposal",
      icon: <AceternityIcon order="August 2023" />,
      des: "A Project Proposal is presented to potential sponsors or clients to receive funding or get your project approved.",
      marks: "Marks Allocated: 06",
      containerClassName: "bg-emerald-900",
      animationSpeed: 5.1,
      colors: undefined,
      dotSize: undefined,
    },
    {
      title: "Progress Presentation I",
      icon: <AceternityIcon order="November 2023" />,
      des: "Progress Presentation I reviews the 50% completetion status of the project. This reveals any gaps or inconsistencies in the design/requirements.",
      marks: "Marks Allocated: 15",
      containerClassName: "bg-pink-900",
      animationSpeed: 3,
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2,
    },
    {
      title: "Status Document I",
      icon: <AceternityIcon order="January 2024" />,
      des: "Status document I includes the presentation of evidence of various activities related to the Teams meeting, Group Calls, Messages and Project conducted with the team members including the Supervisor during the initial phase of the research project. This should be submitted individually by the team members.",
      marks: "Marks Allocated: ",
      containerClassName: "bg-sky-600",
      animationSpeed: 3,
      colors: [[125, 211, 252]],
      dotSize: undefined,
    },
    {
      title: "Research Paper",
      icon: <AceternityIcon order="March 2024" />,
      des: "Describes what you contribute to existing knowledge, giving due recognition to all work that you referred in making new knowledge.",
      marks: "Marks Allocated: 10",
      containerClassName: "bg-emerald-900",
      animationSpeed: 5.1,
      colors: undefined,
      dotSize: undefined,
    },
    {
      title: "Status Document II",
      icon: <AceternityIcon order="March 2024" />,
      des: "Status document II includes the presentation of evidence of various activities related to Teams meeting, Group Calls, Messages and Project conducted with the team members including the Supervisor during the final stage of the research project. This should be submitted individually by the team members.",
      marks: "Marks Allocated: ",
      containerClassName: "bg-pink-900",
      animationSpeed: 3,
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2,
    },
    {
      title: "Progress Presentation II",
      icon: <AceternityIcon order="March 2024" />,
      des: "Progress Presentation II reviews the 90% completetion status demonstration of the project. Along with a Poster presesntation which describes the project as a whole.",
      marks: "Marks Allocated: 18",
      containerClassName: "bg-sky-600",
      animationSpeed: 3,
      colors: [[125, 211, 252]],
      dotSize: undefined,
    },
    {
      title: "Final Reports",
      icon: <AceternityIcon order="April 2024" />,
      des: "Final Report evalutes the completed project done throughout the year. Marks mentioned below includes marks for Individual & group reports and also Final report.",
      marks: "Marks Allocated: 20",
      containerClassName: "bg-emerald-900",
      animationSpeed: 5.1,
      colors: undefined,
      dotSize: undefined,
    },
    {
      title: "Final Presentation & VIVA",
      icon: <AceternityIcon order="May 2024" />,
      des: "Viva is held individually to assess each members contribution to the project.",
      marks: "Marks Allocated: 20",
      containerClassName: "bg-pink-900",
      animationSpeed: 3,
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2,
    },
    {
      title: "Research Paper Registration",
      icon: <AceternityIcon order="June 2024" />,
      des: "After the submitted research paper is accepted, it should be published and registered.",
      marks: "Marks Allocated: ",
      containerClassName: "bg-sky-600",
      animationSpeed: 3,
      colors: [[125, 211, 252]],
      dotSize: undefined,
    },
    {
      title: "Project Website",
      icon: <AceternityIcon order="June 2024" />,
      des: "The Website helps to promote our research project and reveals all details related to the project.",
      marks: "Marks Allocated: 02",
      containerClassName: "bg-emerald-900",
      animationSpeed: 5.1,
      colors: undefined,
      dotSize: undefined,
    },
    {
      title: "Research Logbook",
      icon: <AceternityIcon order="June 2024" />,
      des: "Status of the project is validated through the Logbook. This also includes, Status documents 1 & 2.",
      marks: "Marks Allocated: 02",
      containerClassName: "bg-pink-900",
      animationSpeed: 3,
      colors: [
        [255, 166, 158],
        [221, 255, 247],
      ],
      dotSize: 2,
    },
    {
      title: "Final Report(ProofRead)",
      icon: <AceternityIcon order="July 2024" />,
      des: "The prepared final reports should be proofed that they are prepared correctly and that there are no grammatical errors.",
      marks: "Marks Allocated: 02",
      containerClassName: "bg-sky-600",
      animationSpeed: 3,
      colors: [[125, 211, 252]],
      dotSize: undefined,
    },
  ];

  return (
    <section className="w-full py-20" id="milestones">
      <h1 className="heading">
        Project <span className="text-purple">Milestones</span>
      </h1>

      <div className="my-20 flex flex-wrap items-center justify-center w-full gap-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            icon={card.icon}
            des={card.des}
            marks={card.marks}
          >
            <CanvasRevealEffect
              animationSpeed={card.animationSpeed}
              containerClassName={`${card.containerClassName} rounded-3xl overflow-hidden`}
              colors={card.colors}
              dotSize={card.dotSize}
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Milestones;

interface CardProps {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
  marks: string;
}

const Card: React.FC<CardProps> = ({ title, icon, children, des, marks }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl "
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <Icon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <Icon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div
          className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center"
        >
          {icon}
        </div>
        <h2
          className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white 
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-white text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
          style={{ color: "#E4ECFF" }}
        >
          {des}
        </p>
        <p
          className="text-lg font-bold text-purple opacity-0 group-hover/canvas-card:opacity-100
         relative z-10 mt-4 group-hover/canvas-card:text-purple text-center
         group-hover/canvas-card:-translate-y-2 transition duration-200"
        >
          {marks}
        </p>
      </div>
    </div>
  );
};

interface AceternityIconProps {
  order: string;
}

const AceternityIcon: React.FC<AceternityIconProps> = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex overflow-hidden rounded-full p-[1px] ">
        <span
          className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
         bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
        />
        <span
          className="inline-flex h-full w-full cursor-pointer items-center 
        justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl"
        >
          {order}
        </span>
      </button>
    </div>
  );
};

interface IconProps {
  className?: string;
  [key: string]: any;
}

export const Icon: React.FC<IconProps> = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
