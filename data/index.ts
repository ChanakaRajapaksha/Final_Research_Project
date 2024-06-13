export const navItems = [
  { name: "Scope", link: "#scope" },
  { name: "Milestones", link: "#milestones" },
  { name: "Documents", link: "#documents" },
  { name: "Presentations", link: "#presentations" },
  { name: "About", link: "#about" },
];

export const gridItems = [
  {
    id: 1,
    title: "Introduction the Project",
    description: `
        <br>
        Natural disasters pose significant threats to human life, property and the environment. It is very important to develop strategies to reduce human damage in different types of natural disasters.
        <br><br> 
        <b>What type of natural disasters do people face?</b><br><br>
        <ul>
            <li>Tsunamis</li>
            <li>Floods</li>
            <li>Wildfires</li>
            <li>Earthquakes</li>
        </ul>
        <br>
        <b>What are the challenges faced in natural disasters?</b><br><br>
        <ul>
            <li>The right destination cannot be richer.</li>
            <li>Waste of time.</li>
            <li>High Cost.</li>
            <li>Human resources should be used in case of emergency.</li>
        </ul>

    `,
    className: "md:col-span-2 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "How to overcome the disadvantages and challenges?",
    description: "",
    className: "lg:col-span-2 md:col-span-1 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "The solution is to introduce a drone system",
    description: `
        <br>
        <ul>
            <li>Minimize waste of time and deliver quickly.</li>
            <li>Reduce human resources.</li>
            <li>Safer than the traditional method.</li>
        </ul>`,
    className: "lg:col-span-2 md:col-span-2 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "SURANIMALA",
    description: "",
    className: "lg:col-span-5 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-center",
    img: "/suranimala_drone.jpg",
    spareImg: "",
  },
  {
    id: 5,
    title: "Research Gap",
    description: `<br><p>The system automatically switches from flight mode to emergency mode by detecting battery capacity, wing or mechanical faults.Many existing systems have emergency landings, but in the event of an emergency, they return to the starting point. Using Ultrasonic Sensors, the drone moves by identifying specific obstacles such as water and avoiding them and activates the safe mode at a certain distance for the safety of the drone.The integration of face recognition and notify it by a voice message for user and massage for drone controller represents a novel approach that addresses a significant research gap in the field. The integration of face recognition and gesture control technologies for drone control represents a novel approach that.</p>`,
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "",
  },

  {
    id: 6,
    title: "Research Problems",
    description: `
        <br>
        <ul>
            <li>How to detect battery capacity real-time with goods weight?</li>
            <li>How to detect wing, mechanical faults?</li>
            <li>How to find suitable place to land in emergency mode?</li>
            <li>How to detect objects and avoid them?</li>
            <li>How to detect objects like water and fire and protect the drone?</li>
            <li>How to change the drone modes from flight mode to safe mode?</li>
            <li>How to identify and deliver goods to the correct person along with other persons?</li>
            <li>How to inform whether the receiver is identified or not?</li>
            <li>How to change the drone modes from safe mode to user mode?</li>
            <li>How to give voice messages after identifying Correct user?</li>
            <li>Develop mobile application to upload user images and data for  authentication.</li>
        </ul>
    `,
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "",
    spareImg: "/grid.svg",
  },
  {
    id: 7,
    title: "Main Objective",
    description: `<br><b>"Design and develop an integrated system comprising drones and a mobile application. This system aims to enable remote control of drones via the application while utilizing drone cameras to identify authorized recipients..."</b>`,
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Vision - Based Drone Landing",
    des: "This component enables the drone to land autonomously using visual input from onboard cameras. It processes real-time images to identify safe landing zones, ensuring precise and stable landings. The system uses advanced algorithms, such as convolutional neural networks (CNNs), to recognize and navigate towards designated landing markers or areas.",
    img: "/vision.png",
  },
  {
    id: 2,
    title: "Object Detection and Avoidance",
    des: "The object detection and avoidance system equips the drone with the ability to identify and navigate around obstacles in its flight path. Using sensors like ultrasonic modules (e.g., HC-SR04) and cameras, the drone detects objects and calculates distances, adjusting its course to prevent collisions.",
    img: "/object.png",
  },
  {
    id: 3,
    title: "Facial Recognition and Authentication",
    des: "This component allows the drone to perform tasks related to security and identification through face recognition technology. By utilizing facial recognition algorithms, the drone can identify and authenticate individuals, making it suitable for applications like secure access control or targeted delivery services. The system processes facial images captured by the drone's camera and matches them against a pre-registered database for verification.",
    img: "/facial.png",
  },
  {
    id: 4,
    title: "Gesture Control for Receiver",
    des: "The gesture and voice control system enables the drone to respond to hand gestures and spoken commands for control and navigation. This is achieved by employing CNNs for gesture recognition and processing voice commands using a custom dataset recorded in various environments. The system interprets specific gestures and commands, allowing for intuitive and hands-free operation of the drone, particularly for landing and directional control.",
    img: "/ges.png",
  },
];

export const teams = [
  {
    id: 1,
    title: "Ms. Uthpala Samarakoon",
    des: "Supervisor",
    des2: "Sri Lanka Institute of Information Technology",
    depart: "Faculty of Comuting | Information Technology",
    email: "uthpala.s@sliit.lk",
    linkedin: "https://www.linkedin.com/in/uthpala-samarakoon-76a51439/",
    img: "/supervisor.jpg",
  },
  {
    id: 2,
    title: "Mr. Nelum Chathuranga",
    des: "Co-Supervisor",
    des2: "Sri Lanka Institute of Information Technology",
    depart: "Faculty of Comuting | Information Technology",
    email: "nelum.a@sliit.lk",
    linkedin:
      "https://www.linkedin.com/in/nelum-chathuranga-amarasena-703a66176/",
    img: "/co_super.jpg",
  },
  {
    id: 3,
    title: "Arachchi S.C.S",
    des: "Group Leader",
    des2: "Sri Lanka Institute of Information Technology",
    depart: "Software Engineering",
    email: "sanjusooriyaarachchi@gmail.com",
    linkedin: "https://www.linkedin.com/in/chandima-sooriyaarachchi-a08449174/",
    img: "/mem1.jpg",
  },
  {
    id: 4,
    title: "De Silva P.R.P",
    des: "Group Member",
    des2: "Sri Lanka Institute of Information Technology",
    depart: "Information Technology",
    email: "ravishkapravindika99@gmail.com",
    linkedin: "https://www.linkedin.com/in/ravishka-pravindika/",
    img: "/mem2.jpg",
  },
  {
    id: 5,
    title: "Rajapaksha R.C.P",
    des: "Group Member",
    des2: "Sri Lanka Institute of Information Technology",
    depart: "Software Engineering",
    email: "chanakaprasath456@gmail.com",
    linkedin: "https://www.linkedin.com/in/chanakarajapaksha/",
    img: "/mem3.jpg",
  },
  {
    id: 6,
    title: "Gamage B.G.A.C",
    des: "Group Member",
    des2: "Sri Lanka Institute of Information Technology",
    depart: "Software Engineering",
    email: "Avishkachanaka@gmail.com",
    linkedin: "https://www.linkedin.com/in/avishka-chanaka-397148229/",
    img: "/mem4.jpg",
  },
];

export const testimonials = [
  {
    quote:
      "In assembling the drone, meticulous techniques ensure secure mounting of each component for optimal performance, including attaching 1000KV brushless motors to an F450 carbon fibre frame. Wiring the Electronic Speed Controllers (ESCs) to each motor requires careful attention for reliable power distribution, and each motor is calibrated individually before mounting with the APM 2.8 controller. Strategically positioning the Ardupilot flight controller and M8N GPS module at the frame’s center ensures balanced flight control. Adhering to precise polarity and manufacturer guidelines for the power distribution board, battery connection, and 10-inch propellers prevents electrical hazards and enhances flight precision. The drone, powered by four motors providing a total thrust of around 2400g, is initially controlled by a transmitter, then by a Raspberry Pi with Python code, offering various flight modes like Loiter, Stabilization, and AltHold.",
    name: "",
    title: "",
  },
  {
    quote:
      "This project evaluates voltage, power consumption, and adjusted speed, accounting for wind resistance to ensure safe and reliable drone operation. A systematic approach integrating relevant formulas is employed to optimize drone performance in various climatic conditions. The study aims to understand the impact of wind resistance on electricity usage, beginning with clarifying research goals and conducting a literature review on drone design and power optimization. The research approach uses the Haversine formula, Vincenty’s equations, and bearing determination formulas to navigate with the M8N GPS module. The drone's navigation system is programmed with destination coordinates, and upon receiving satellite signals, the GPS module calculates direction and distance using the Haversine formula.",
    name: "",
    title: "Vision-Based Drone Landing",
  },
  {
    quote:
      "Object detection on a drone uses HC-SR04 ultrasonic sensors, which emit ultrasonic waves and measure reflections to calculate distances to nearby objects. The Raspberry Pi GPIO library manages these sensors and drone motor controls, with core functions for movement and an obstacle avoidance system using continuous distance measurements. YOLOv8 is integrated for real-time object detection in aerial imagery from drone webcams, trained on the COCO dataset, and enhanced with data augmentation techniques for robustness. The system processes input frames in real-time, identifying objects for applications like surveillance and search and rescue. Additionally, a transfer learning-based ResNet50 model is used for water detection, trained on a balanced dataset of 4,000 images, with a level set-based algorithm and sigmoid activation for classification.",
    name: "",
    title: "Object Detection and Avoidance",
  },
  {
    quote:
      "The first step in the process is organizing image datasets into separate directories for positive, negative, and anchor images. Using TensorFlow, images are read, decoded, resized to 100 pixels, and normalized, with a preprocess function converting user-uploaded images into an executable format. The Siamese Network Architecture's core is the embedding function, a CNN model that extracts and transforms images into feature vectors through convolutional and pooling layers. An L1Dist layer calculates the L1 distance between two images encoded by the CNN layer to determine similarity. During model training, the dataset is labeled for hetero and homo images, the Adam optimizer fine-tunes weights, and training is conducted over multiple epochs with metrics for loss, recall, and precision.",
    name: "",
    title: "Face Recognition and Authentication",
  },
  {
    quote:
      "The project aims to develop a drone landing control system activated by voice commands and hand gestures, utilizing drones with onboard cameras, high-quality microphones, and real-time processing units. Hand gesture recognition accuracy is enhanced using transfer learning with pre-trained CNN models and regularization techniques like hyper-parameter tuning and dropout. Experimenting with the CNN architecture, including adjustments to the number of layers and filter width, further improves model performance. A CNN is trained to recognize spoken commands ('left', 'right', 'up', and 'down') from a custom dataset recorded in various environments to account for real-world sound variations. The system integrates these technologies to achieve precise and efficient drone landing control.",
    name: "",
    title: "Gesture and Voice Control for Receiver",
  },
];

export const companies = [
  {
    id: 1,
    name: "Python",
    img: "/python.png",
    nameImg: "",
  },
  {
    id: 2,
    name: "TensorFlow",
    img: "/ten.png",
    nameImg: "",
  },
  {
    id: 3,
    name: "Keras",
    img: "/keras.png",
    nameImg: "",
  },
  {
    id: 4,
    name: "Google Colab",
    img: "/colab.png",
    nameImg: "",
  },
  {
    id: 5,
    name: "OpenCV",
    img: "/opencv.png",
    nameImg: "",
  },
  {
    id: 6,
    name: "React Native",
    img: "/react.png",
    nameImg: "",
  },
  {
    id: 7,
    name: "Firebase",
    img: "/firebase.png",
    nameImg: "",
  },
  {
    id: 8,
    name: "Google Cloud",
    img: "/cloud.png",
    nameImg: "",
  },
  {
    id: 9,
    name: "YOLOv8",
    img: "/yolo.jpg",
    nameImg: "",
  },
  {
    id: 10,
    name: "GitLab",
    img: "/gitlab.png",
    nameImg: "",
  },
];

export const projectDocuments = [
  {
    id: 1,
    title: "Topic Assessment",
    desc: "Submitted on 2023/07/14",
    status: "Group",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    pdfUrl:
      "https://drive.google.com/file/d/1vdEeOs5f3_kgIk_AOZ3qw6HKFD3rgsFU/view",
  },
  {
    id: 2,
    title: "Project Proposal",
    desc: "Submitted on 2023/08/25",
    status: "Individual",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    pdfUrl:
      "https://drive.google.com/drive/u/0/folders/1w-R7uyk3clGvBpJikTem90pBBCI1q2BO",
  },
  {
    id: 3,
    title: "Status Document I",
    desc: "Submitted on 2024/01/22",
    status: "Individual",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    pdfUrl:
      "https://drive.google.com/drive/u/0/folders/1CJNWOFJSNgegvu55qajoWOBv6UxsUUhe",
  },
  {
    id: 4,
    title: "Status Document II",
    desc: "Submitted on 2024/05/12",
    status: "Individual",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    pdfUrl:
      "https://drive.google.com/drive/u/0/folders/1wFFBro31dD6lPsHRUMF0e8afAW7kYt7e",
  },
  {
    id: 5,
    title: "Research Paper",
    desc: "Submitted on 2024/04/05",
    status: "Group",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    pdfUrl:
      "https://drive.google.com/file/d/1MsKiA6_Xev_yd0B1IpJsYQGOJcbxsoH0/view",
  },
  {
    id: 6,
    title: "Final Report",
    desc: "Submitted on 2024/04/05",
    status: "Group | Individual",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    pdfUrl:
      "https://drive.google.com/drive/u/0/folders/1DiHrSPGtmtFPg-0JY4ozjY3islK5u6F5",
  },
  {
    id: 7,
    title: "Poster",
    desc: "Submitted on 2024/08/03",
    status: "Group",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    pdfUrl:
      "https://drive.google.com/drive/u/0/folders/1y-X3y_etg4tvMtXDOgKE2SLsc6D10iIa",
  },
];

export const projectPresentations = [
  {
    id: 1,
    title: "Proposal Presentation",
    desc: "Submitted on 2023/08/25",
    status: "Group",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    slideUrl:
      "https://docs.google.com/presentation/d/16YbUUVyg0VvOPDbIBFC_kdph_TAT_-CZ/edit#slide=id.p1",
  },
  {
    id: 2,
    title: "Progress Presentation I",
    desc: "Submitted on 2023/11/05",
    status: "Group",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
    slideUrl:
      "https://drive.google.com/file/d/1srJRnhA3XzAzCOYjD5FNOuymUPwkeGlS/view",
  },
  {
    id: 3,
    title: "Progress Presentation II",
    desc: "Submitted on 2024/03/28",
    status: "Group",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp4.svg",
    slideUrl:
      "https://docs.google.com/presentation/d/1vK5etDlOJEjo1wHNEcPh4GlA_joZdwFL/edit#slide=id.p1",
  },
  {
    id: 4,
    title: "Final Presentation",
    desc: "Submitted on 2024/05/30",
    status: "Group",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    slideUrl:
      "https://drive.google.com/file/d/1sDuHDtv12Tp9xFXZD0i3-Wq9R3fS6Z30/view",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
