import React from 'react';

const Survey = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Project <span className="text-purple">Scope</span>
      </h1>
      <p className="mt-20 text-sm md:text-lg leading-[1.6] text-white font-normal m-[-10px]">
        " Recent literature highlights the critical advancements in drone
        technology aimed at creating a robust drone service capable of carrying
        goods in emergency situations. Vision-based landing systems leverage
        cameras and computer vision algorithms to enhance landing precision and
        safety, integrating PID and Fuzzy Logic controllers with sensors like
        LIDAR and USB cameras for effective target detection and obstacle
        avoidance. Object detection technologies, such as ultrasonic and LIDAR
        sensors combined with advanced algorithms like R-CNN and YOLO v8, enable
        drones to navigate complex environments and identify obstacles, crucial
        for safe operations in emergency scenarios. Facial recognition systems
        on drones enhance security and efficiency by identifying individuals
        through live video streams, though challenges remain regarding algorithm
        accuracy and privacy concerns. Gesture and voice control technologies
        further enhance drone operations by allowing intuitive navigation and
        control, utilizing CNN architectures and deep learning models for
        accurate gesture detection and real-time command execution. These
        integrated technologies, leveraging AI advancements and edge computing,
        promise to revolutionize emergency response capabilities by enabling
        agile, secure, and efficient drone delivery services for critical goods
        and supplies "...
      </p>
    </div>
  );
};

export default Survey;