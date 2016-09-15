//chakras object is wrapped in module.exports so it can be exported to different parts of the app
//strings are being stored here and different parts injected into template chakra.ejs
module.exports  = {
    chakras: {
        root: {
            title: "Root",
            description: "The Root Chakra represents our foundation and feeling of being grounded and secure.",
            location:"Base of spine in tailbone area",
            color: "Red",
            affects: " Survival concerns such as money and food",
            meditation: " The element of the root chakra is the earth. Go outside, sit on the grass or under a tree." +  
            " Close your eyes, and take three deep breaths in and out.  Imagine a bright red light at the base of your tailbone." +  
            " Picture this red light extending down your legs and feet, grounding you to the earth.",
            yoga: "One of the yoga poses that connects you to your root chakra is the tree pose. Get on your yoga" + 
            " mat. Do the tree pose. Take deep breaths in and out five to eight times, then switch legs.",
            yogaImage: "tree-pose.png"
        },
    
        sacral: {
            title: "Sacral",
            description: "The sacral chakra’s element is water and associated with our emotional responses and regulation.",
            location: "Lower abdomen",
            color: "Orange",
            affects: " Sense of well-being, pleasure, creativity",
            meditation: " Sit comfortably and take three deep breaths in and out. Imagine an orange light in your lower abdomen" +
            " moving in a circular motion. Hold that image for a few minutes.",
            yoga: "One of the yoga poses that connects you to your sacral chakra is the cobra pose. Get on your yoga mat and do" +
            " the cobra pose. Close your eyes and imagine the orange rotating light that connects you to your sacral chakra.",
            yogaImage: "cobra-pose.png"
        },
        
        solarplexus: {
            title: "Solar Plexus",
            description: "The solar plexus chakra is energized by the sun and the element of this chakra" +
            " is fire. It is all about the perception of who we are. The energy of the chakra allows us to meet" +
            " challenges and move forward in our lives.",
            location: "A few inches above the navel",
            color: "Yellow",
            affects: " Personal power, ambition, willpower",
            meditation: " Sit comfortably, close your eyes, take three deep breaths and relax. Think of three" +
            " things you appreciate about yourself. Meditate on your awesomeness.",
            yoga: "One of the yoga poses that connects you with your solar plexus chakra is the boat pose. Hold" +
            " this pose for five to seven breaths.",
            yogaImage: "boat-pose.png"
            
        },
        
        heart: {
            title: "Heart",
            description: "The heart chakra's element is air and it is related to our ability to have unconditional" +
            " love and compassion for ourselves and others.",
            location: "Center of the chest",
            color: "Green",
            affects: " Passion, acceptance",
            meditation: " Sit comfortably, slow deep breaths. Imagine the chakra radiating a circle of green light that fills" +
            " your chest and melts away all the hardness. Meditate like this for as long as you're comfortable.",
            yoga: "The yoga pose to open up your heart chakra is the bridge pose. Make yourself comfortable on your mat and do" +
            " the bridge pose.  Hold it for five to eight breaths.",
            yogaImage: "bridge-pose.png"
        },
        
        throat: {
            title: "Throat",
            description: "When the throat chakra is in balance we have easy flow of energy within body and" +
            " spirit. We can communicate our ideas, beliefs, and emotions and bring our personal truth into the world.",
            location: "Hollow of the collarbone",
            color: "Blue",
            affects: " Self expression, communication, will",
            meditation: " Go ahead and call a good friend or family member just to say hello, and show them that you care." +
            " This person will appreciate that you thought of them, and you will feel good about reaching out.",
            yoga: "The fish pose can help open and strengthen your throat chakra. Get on your mat, and do the fish pose." +
            " Hold it for five to eight breaths.",
            yogaImage: "fish-pose.png"
        },
        
        thirdeye: {
            title: "Third Eye",
            description: "The function of the third eye chakra is driven by the principle of openness and imagination.",
            location: "On the forehead between the eyebrows",
            color: "Indigo",
            affects: " Vision, intuition, motivates inspiration and creativity",
            meditation: " Get yourself in a calm and relaxed state. Focus on energy coming up through your feet with each inhale." +
            " Bring this energy up through each of the five previous chakras, and last bring that energy up to the center" +
            " of the forehead. Imagine a purple energy ball growing larger and larger on your forehead with each inhale." +
            " Continue this meditation until you feel a tingling sensation or warmth on the center of your forehead.",
            yoga: "The downward facing dog pose can help with opening up the third eye chakra. Get in the pose" +
            " and stay there anywhere from one to three minutes.",
            yogaImage: "downdog-pose.png"
        },
        
        crown: {
            title: "Crown",
            description: "The crown chakra is the center for deeper connection with ourselves and deeper connection" +
            " with a force of life that is greater than us.",
            location: "Top of the head",
            color: "Violet",
            affects: " Trust, devotion, connection with the divine",
            meditation: " One way to open up the crown chakra is with positive affirmations. For example say the" +
            " following affirmation: 'I go beyond limiting beliefs, I am one with ALL.'",
            yoga: "The warrior III pose can help bring you closer to your crown chakra. Once you're in the pose" +
            " look down on the floor and stare at a point for balance.  Hold for two to six breaths.",
            yogaImage: "warrior-pose.png"
        }
    }
};