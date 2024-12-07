<mark>**Note that this document order from FP4 -> FP1**</mark>

<mark>Please sign up for the study</mark> at [https://tinyurl.com/pui-study](https://tinyurl.com/pui-study) to allow us to use your submission to create a better GenAI assistant for designers!

---

# **FP4 \- Final Project Writeup**

Feel free to refer to this [Markdown Cheat Sheet](https://www.markdownguide.org/cheat-sheet/) to make your writeup more organized, and you can preview your markdown file in VSCode [Markdown editing with Visual Studio Code](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview). 


## Part 1: Website Description

Describe your website (300 words).

What is the purpose of your website?
Who is the target audience?
What information do you convey with your website?
How is it interesting and engaging?

My website is a personal portfolio designed to showcase my skills in digital media and product design. Its primary purpose is to provide a creative and compelling representation of my work for potential employers, recruiters, and visitors from platforms like LinkedIn and social media. Specifically, the portfolio is tailored to support my applications for product management and product design roles, as outlined in the introduction section of the site.

The website features three main categories of projects: photography, videography, and product design. In the photography section, there is a carousel displaying my film photography, with plans to expand this feature to include other types of images in separate carousels. The videography section highlights a documentary I created for HoneyPoi, a pop-up kitchen in Pittsburgh, with a link to the video hosted on YouTube. In the product design section, visitors can view two downloadable PDF files showcasing detailed slides of product design projects I’ve completed.

What sets my website apart is its unique structure, which breaks away from conventional portfolio layouts. Instead of a typical hero page with separate sections or tabs, my portfolio is designed like a video editor, offering a highly interactive, streamlined experience. All content is consolidated on a single page, with projects and images displayed dynamically in a project window player, eliminating the need for additional navigation or page loads.

This  design approach makes the website engaging and intuitive, reflecting my focus on user-centered design and creativity. By presenting my work in this cohesive and visually appealing format, the portfolio effectively conveys my skills, creative vision, and ability to think outside the box—qualities that are vital for roles in product management and design.

## Part 2: User Interaction

How a user would interact with your website? For each step, briefly but clearly state the interaction type & how we should reproduce it.

1. Character customizer toggle - press on the toggle button to toggle on an animation in the character view window (WIP)
2. Timeline - click on one of the pink "bars" to open an image in the project window, and scroll right to reveal more of the timeline
3. Projects - click on the toggles to open any of the accordians
4. Project files - click on the project thumbnail to send it to the project window
5. Project click through - click on the forward or backward button in the project window to go forwards or backwards in the image carousel / pdf
6. Social buttons - click on the social buttons to be redirected to its respective websites


## Part 3: External Tool

Describe what important external tool you used (JavaScript library, Web API, animations, or other). Following the bulleted list format below, reply to each of the prompts.

1. PDF.js
   * Why did you choose to use it over other alternatives? (2 sentences max) 
   It allows me to render and interact with PDFs directly on the website without requiring extra external applications. 
   * How you used it? (2 sentences max)  
   Used to load and display PDF files in the #projectViewWindow, complete with caching for improved performance.
   * What does it add to your website? (2 sentences max)  
    It provides an integrated experience for showcasing my product design PDFs without leaving the website.

2. Font Awesome
  * Why did you choose to use it over other alternatives? (2 sentences max) 
   It offers a wide range of scalable icons and social logos that are easy to integrate into the website.
  * How you used it? (2 sentences max)  
   I used it for icons like gear symbols or social media buttons.
  * What does it add to your website? (2 sentences max)  
    Provides professional-looking icons without needing to design or host them manually.

## Part 4: Design Iteration

Describe how you iterated on your prototypes, if at all, including any changes you made to your original design while you were implementing your website and the rationale for the changes. (4-8 sentences max)

For the most part, I stuck to my initial project design. However, due to time reasons, I did have to simplify my website. 

The feature that went through the most iteration is my projects tabs. Originally, I made it so that clicking the title will immediately open the accordion, but through trial and error, I made it so that you had to click the toggle to trigger the accordion, and I added animations so that it slid out instead of just "appearing". 

The next feature that went through an overhaul is my timeline, where I intiially planned on creating a "scrubbable" timeline where images will flash on my screen. However, my TA has shown concerened about the ambitiousness of this feature, so I ended up settling with clickable items.

## Part 5: Implementation Challenge

What challenges did you experience in implementing your website? (2-4 sentences max)

I had challenge implementing the javascript to handle the different project types. As some of my project files are images, while others are PDF files, I had to write cases to handle all the scenerios, and seperate functions to load them in.

## Part 6: Generative AI Use and Reflection

Describe how you used Generative AI tools to create this final project (fill in the following information, write \~500 words in total).

Document your use of all GenAI tools — ChatGPT, Copilot, Claude, Cursor, etc. using the template below. Add/Delete rows or bullet points if needed, and replace Tool1/Tool2 with the name of the tool.

### Usage Experiences by Project Aspects

Feel free to edit the column \_ (other?) or add more columns if there's any other aspect in your project you've used the GenAI tools for.

For the following aspects of your project, edit the corresponding table cell to answer:
- *Usage*: Whether you used / did not use this tool for the aspect. Enter [Yes/No]
- *Productivity*: Give a rating on whether this tool makes your productivity for X aspect [1-Much Reduced, 2-Reduced, 3-Slightly Reduced, 4-Not Reduced nor Improved, 5-Slightly Improved, 6-Improved, 7-Much Improved].

| Tool Name | Ratings | design | plan | write code | debug | \_ (other?) |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| ChatGPT | Usage | No | Yes | Yes| Yes| / |
|  | Productivity | / | 7 | 5 | 7 | / |
| PearAI| Usage | No | No | Yes | No | / |
|  | Productivity | / | / | 3 | / | / |
| Bubble| Usage | No | No | No | No | / |
|  | Productivity | / | / | / | / | / |


### Usage Reflection

* ChatGPT  
  * I will use it to debug code, as it can easily and efficiently identify wrong syntax and logic errors.
  * I will not use it for writing my entire code, as it may use different syntax/ formatting styles we are taught in class. 
* Bubble
  * I will use the build guide to learn how to implement certain features into my website.
  * I will not plagiarize off bubble.


> Impact on your design and plan 
* It matched my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. ChatGPT: It helped me quickly debug my code, where it would help me find missing closing brackets and syntax errors. I also asked it to help me write overview plans on how to approach my code.
  2. PearAI: It was very efficient in debugging my code as it was built into the system. 
  3. Bubble: I did not end up using this at all because it required you to use their built in web builder.
* It did not match my expectations and plan in [FP2](#generative-ai-use-plan) in that … For example, 
  1. ChatGPT: As my website is unconventional, the overview plans did not always suit what I needed.
  2. PearAI: Although effective, because I was not used to the UI of it, I would make mistakes with copying code in which sometimes slowed down my progress.
  3. Bubble: See above.

* GenAI tool did/did not influence my final design and implementation plan because … For example, 
  1. ChatGPT: ChatGPT helped me revamp how my flexboxs worked. For example, it would tell me to implement fixed heights instead of entirely relying on flex grid so that the elements within the flex box would not affect the shape/ size of it. It also helped me with adding logci to collaps other accordion sections and ajust their max height when i opened a new section.
  2. PearAI: /
  3. Bubble: See above.

> Use patterns
* I accepted the generations when …  For example, 
  1. ChatGPT: I accepted the generations when I fully understood the functionality, and when it aligns with what we learned in class. For example, I accepted how it formatted my classe defintion within the portfolioData JS file because it aligned with the in lab examples. I also accepted generations that were made to help my code run more smoothly. For example, chatGPT told me to use .promise in page.render(renderContext).promise.then(() => { because  it ensures the program waits for the rendering to complete before executing dependent code.

  2. PearAI: I accepted the generations when it helped my code run by removing errors.
  3. Bubble: /

* I critiqued/evaluated the generated suggestions by … For example, 
  1. ChatGPT: ChatGPT suggested that i integrate Boostrap's col-* classes, but I decided to stick with custom CSS for more control over my unique layout. ChatGPT also suggested using fixed heights for certain flexbox containers to ensure the child elements did not distort the layout, but I opted for a mix of auto heights and relative units for better responsiveness.
  2. PearAI: /
  3. Bubble: /



> Pros and cons of using GenAI tools
* Pros
  1. ChatGPT: It streamlined my coding and debugging progress, and reduced the amount of time needed searching for resources on documentations. It also made recommendations of librarys/ features I can use, instead of me having to manually look for them myself. 
  2. PearAI: It helped me debug some of my code within the software.
* Cons
  1. ChatGPT: Sometimes, I would develop an overdependence on ChatGPT where I kept checking my code with it, instead of manually debugging myself. Sometimes, it would also suggest changes that completely derail my code because it does not have the context needed to provide help.
  2. PearAI: I accidentally deleted my correct code, slowing down my progress.


### Usage Log

Document the usage logs (prompts and chat history links) for the GenAI tools you used. Some tools may not have an easy way to share usage logs, just try your best! Some instructions for different tools:

1. [ChatGPT](https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq): https://chatgpt.com/share/675385c5-c18c-8008-9cca-ec20a0262361
2. [GitHub Copilot (VSCode)](https://code.visualstudio.com/docs/copilot/copilot-chat#:~:text=You%20can%20export%20all%20prompts%20and%20responses%20for%20a%20chat%20session%20in%20a%20JSON%20file%20with%20the%20Chat%3A%20Export%20Session...%20command%20(workbench.action.chat.export)%20in%20the%20Command%20Palette.): Did not use

---

### Appendix



# **FP3 \- Final Project Check-in**

Document the changes and progress of your project. How have you followed or changed your implementation & GenAI use plan and why? Remember to commit your code to save your progress.

## Implementation Plan Updates

- [ ] ...

## Generative AI Use Plan Updates

- [ ] ...

Remember to keep track of your prompts and usage for [FP4 writeup](#part-6-generative-ai-use-and-reflection).

---

# **FP2 \- Evaluation of the Final project**

## Project Description

This is a personal portfolio showcasing my works within different fields, including photography, videography, and product design. This portfolio is made with the Programmable User Interface (PUI) course requirements in mind, including (1) using an interesting tool/ set of user interactions, (2) accessibility design, and (3) responsive design. 

My portfolio is built with storytelling in mind, so it will incorporate video and animation components. It is built to look like a video editor because I use that program frequently for both personal and professional work.

## High-Fi Prototypes

### *Prototype 1*

![Portfolio Website](images/portfolioMockup.jpg)

Overall, people thought my design was creative and well thought out. They liked the interactivity I included and the idea of mixed media within the portfolio. Those who understood video editing softwares found it easier to find smaller “discoverable” features, but overall, the portfolio was straightforward to navigate.

[Figma Prototype](https://www.figma.com/proto/EYJzRCgiSNypChy2Ka6ahT/Personal-Portfolio?page-id=0%3A1&node-id=1-2&node-type=frame&viewport=743%2C-160%2C0.98&t=EXeejHUxyaXQCYzy-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2)

## Usability Test

### Objective: 
To see if users can intuitively navigate the website, access the different portfolio pieces, and interact with “hidden features”.

<details>
  <summary>Study Questions</summary>
  
**Landing page: (if made)**
- Is the introductory video informative? 

**Character customization feature:**
- Does this feature convey anything to you about the portfolio owner?

**Project selection retrieval:**
- Is it easy to navigate through the different projects? 
- Are the projects the focus of the portfolio?

**Life timeline interaction feedback:**
- How much information should be showcased in the life timeline? 
- Should there be a common theme within the events?

**Overall navigation and final thoughts**
- Are the mini-interactions distracting users from the project?
- What is the balance between a fun interaction and a practical interaction that showcases skill?

</details>

<details>
  <summary>User Testing Walkthrough/Questions</summary>

**Introduction**
Greeting: Thank you for participating in this user testing session for my personal portfolio. As I decided to stylize my website in an unconventional way, the goal is to see how easily you can navigate the site and access different information within my portfolio.

Instructions: As you navigate the website, please think aloud and share any thoughts or questions you have as you explore its different components.

Background given: This portfolio is inspired by a video editor you may have used before.

**Possible questions after navigation**

1. Landing page:
- “What did you learn from the introduction video?”
- “If you were to reaccess this portfolio, would you rewatch the entire video?”

2. Character customization feature:
- Task: “Can you turn Eunice into a rugby player?”
- “Does this feature convey anything to you about the portfolio owner?”

3. Project selection retrieval:
- “Let's say you want to see the collection of videography projects. How would you do that?”
- Task: “Navigate to another project within the product tab.”

4. Life timeline interaction feedback:
- “How would you go about navigating the timeline?”
- Task: “Could you navigate to the time where…”
- “Is there a common theme to the different events in the timeline?”

5. Overall navigation and final thoughts:
- “Is anything about the navigation confusing?”
- “Did any of the mini-interactions cause more confusion than enjoyment?”
- “Does knowing how a video editor works help you navigate the site better?”

</details>

### Insights from user testing
**Intuitive use:** The layout is clean, but the character customizer section is imbalanced. The character screen and the toggle buttons look like separate features, as they are the same size. Additionally, one user’s first reaction was to press the space bar to play the timeline, just like in the video editor. As I did not consider this, this interaction did not do anything.

**Changes made:** I will change the character customizer toggle buttons to be smaller and make it so that pressing space will play a video prompting the user to click around instead

**Learnability:** The structure is simple, as it is all in one plaza. However, first-time visitors will need a guided walkthrough.

**Changes made:** I will create a video landing page of myself explaining my website. I will also implement some sort of visual feedback when clicking through sections.

**Accessibility:** The contrast between text and background is good, and the layout is spacious. However, some buttons and text are a bit small.

**Changes made:** I will change the text size and buttons to be bigger, and create a light-mode version of the website.


## Updated Designs

<img src="images/introScreen.png" alt="Introduction Screen" width="270">
<img src="images/lightmode.png" alt="lightmode" width="300">
<img src="images/updatedMockup.png" alt="updatedMockup" width="300">

<br>

1. I will implement a (skippable) introduction video that acts as a landing page before you complete the website. It will be a video of me explaining the idea behind my portfolio and encouraging people to actively interact with it.

2. While I am focused on creating an immersive experience, I will create a light mode for my website to make it easier for people not familiar with editing software to read.

3. I changed the size of some of my website's features, including the character toggle buttons and the project buttons.


## Feedback Summary

The people in my lab session all expressed that my idea is very creative, and no one expressed any difficulty in understanding that my design is modeled after video editing software. They also thought the mini-interactions were a fun addition that possibly added to my personality profile (fidgety, with the need for stress relief).
However, they stressed the importance of providing context before accessing the website, which I plan on doing through a real-life video of me explaining my background and encouraging users to explore the website. My TA thought this was a good way of creating my landing page as it thematically relates to my portfolio.

I was encouraged to look into a JS library that implements video-playing features and animations so that I could execute my video player-vision. 


## Milestones

Outline weekly milestones to plan your expected implementation progress until the end of the semester (\~300 words). 

### *Implementation Plan*

- **[X] Week 9 Oct 28 \- Nov 1:**
  - [X] FP1 due
  
- **[ ] Week 10 Nov 4 \- Nov 8:**   
  - [X] FP2 due
  - Documentation Setup:
    - [ ] (optional) learn how to use and implement storybook
    - [ ]Connect Figma to working file
  - Research:
    - [X] Get inspiration and create a list of required features from other people’s portfolios
    - [X] Learn how to use the different JS libraries I will be implementing
  - Basic Structure Development:
    - [X] Set up the basic HTML structure, including placeholders for each major section (eg. video player, character customization etc.)
    - [X] Create well-named flexboxes in CSS to support responsive layout and styling adjustments
  -  Placeholders & Text:
    - [X] Add placeholders for all icons and images to define layout and positioning 
    - [X] Insert simple text for each section as a preview of the final content

-**[ ] Week 11 Nov 11 \- Nov 15:**
  - [X] FP3 Due
    - Icon and Imagery Creation:
      - [X] Design or gather all icons and visual elements needed for each feature.
      - [X] Replace placeholders with finalized icons and images, adjusting sizes and positions as needed.
      - [X] Fine-tune CSS for visual polish, adjusting colors, fonts, and layout details

- **[ ] Week 12 Nov 18 \- Nov 22:**
  - Project Navigator:
    - [X] Begin loading all project files and assets into the website, ensuring each project is correctly categorized within its respective collection (e.g., Photography, Videography, Product)
    - [X] Develop a collapsible list for easy navigation, allowing users to expand and collapse project categories
    - [X] Integrate the video player with the Project Navigator, so selecting a project automatically loads it in the player for seamless viewing.
    - [X] Implement a pop-up feature that enlarges projects when clicked, providing a closer look at project details
    - [X] For projects that are external webpage links or documents, add a distinct visual cue (e.g., an icon or label) that indicates users can directly click to access the project.

- **[ ] Week 13 Nov 25 \- Nov 29 (Thanksgiving):**
    - Loading Screen:
      - [X] Write a script for the loading screen video
      - [ ] Film and edit introduction video, including relevant imagery and captioning for accessibility
      - [ ] Implement a loading screen into the website, create buttons that allow you to play, pause, or fastforward the video

    - [ ] Catch up on any unfinished tasks from previous weeks

- **[ ] Week 14 Dec 2 \- Dec 6:**
  - [X] FP4 due 
  - Final Debugging & Testing:
    - [X] Conduct a debugging session to address layout, functionality, and performance issues
    - [X] Run final accessibility checks for compatibility with screen readers, keyboard navigation, etc
  - Documentation:
    - [X] Document the final implementation, including any features added or modified

### *Libraries and Other Components*

1. **Video.js** (https://videojs.com/)
<br>
Web video player that will allow me to create my loading page and display my different videography work within the website

2. **Anime.js** (https://animejs.com/)
<br>
A javascript animation library that could help with my customer characterization animations

3. **GSAP** (https://gsap.com/)
<br>
Another JS animation library
Features: Timeline control, easing functions, and ability to animate multiple properties

4. **Howler.js** (https://howlerjs.com/)
<br>
Supports multiple audio formats and sound sprites for my micro-interactions


## Generative AI Use Plan

I plan to leverage generative AI tools in design, development, and content creation. 

Starting with design, tools like Figma’s AI plugins or DALL-E will enable rapid prototyping of visual elements, such as custom icons, backgrounds, and layout ideas, allowing me to experiment with aesthetics efficiently. 

In development, I’ll use ChatGPT’s code generation to assist with complex coding features, like collapsible folders and interactive thumbnail scrubbers. These tools will provide optimized code suggestions and debugging support, ensuring smooth, responsive interactions. Additionally, generative AI will assist with brainstorming creative micro-interactions, such as a “fidget spinner” effect, by providing code examples I can refine and test. 

For content creation, I’ll use AI to draft concise, polished descriptions for each project, establishing a professional tone throughout the portfolio.

### *Tool Use*

* ChatGPT  
  * I will use it to debug code, as it can easily and efficiently identify wrong syntax and logic errors.
  * I will not use it for writing my entire code, as it may use different syntax/ formatting styles we are taught in class. 
* Bubble
  * I will use the build guide to learn how to implement certain features into my website.
  * I will not plagiarize off bubble.

### *Responsible Use*

* I can use AI to aid in coding assignments, but can only use it to augment existing work, not create solutions for me
* I will ensure to cite the usage of AI in my code and images
* I can use AI generation to create a broad high-level pseudocode, but not a step-by-step guide for lines of code


---

# **FP1 \- Proposal for Critique**

## Idea Sketches

### *Idea 1: Interactive Personal Portfolio*

![idea 1 sketch](images/ideasketch1.jpg)

Purpose: a personal portfolio for my photography/ videography/ product design work

- Fully interactive and fun to explore - make everything clickable
- Able to be read using a screenreader/ download a cv style version of the website
- Want to show my multifaceted skills in mixed media
- Emphasis on storytelling
- Designed to look like a video editor
- Questions: how can I make people want to explore the website, which in hand forces them to learn more about me?

- inspo: https://webflow.com/made-in-webflow/website/pierrelouis

### *Idea 2: Interactive “fridge” - recipe builder site*

![idea 2 sketch](images/ideasketch2.jpg)

Purpose: an interactive fridge that lets you click through ingredients, and it comes up with a list of recipes.

- Utilizes a preloaded set of recipes I pick
- The ingredients are directly clickable
- For accessibility, the ingredients can also be changed to simple text for understanding
- Questions: How would I track what recipes show up for what ingredient? How many ingredients must there be for the recipe to show up?

### *Idea 3: 5 min tracker - where does your day go?*

![idea 3 sketch](images/ideasketch3.jpg)

Purpose: an interactive 15-minute tracker that lets you input your daily activities, and visualize them into a bar graph and a “story”

- I'm passionate about productivity and learning how to maximize your day
- As you edit your day, your graph changes
- For accessibility, make a way so that inputting your activities is easier, eg. sliders
- Question: how would I make everything change live and smoothly? What visualizations will I use?
 
## Feedback Summary

Everyone in my lab thought I had very creative ideas. One of my classmates asked how I would emphasize the storytelling element of my portfolio, and I think I want to incorporate some videography work into my portfolio to "tell my story". 

My TA stated that the portfolio idea is a great way to showcase the skills we learned in usability and interaction design, and supports iterative and incremental development, making it easy for me to visualize my progress.

Next, my fridge idea is fun and useful to me, and is quite similar to a potential project of another student, which might allow us to collaborate and support each other if we both happen to choose this project. However, there may be some complications with creating pre-loaded and labeled data.

Lastly, the third idea is relatively simple and clean, and is a tool that anyone can use. Some consideration I was given is how would i interpret somewhat arbitrary data and turn it into meaningful stories. The complication comes with the variability of input.

## Feedback Digestion

I think I will go with my portfolio idea. Not only does it allow me to showcase all the skills we learned in this class, it gives me "room to grow". As it does not require as much preplanning as my other projects,  it allows me to build upon it step by step, giving me lots of space for manipulation and improvement. It will also be benefical to contain all my other projects as I'm busy looking for an internship. 

However, I'm still interested in my 15-minute tracker idea. I may try to learn how user-generated data comes into play in development with the "build my character" mini-game I want to include in my portfolio. I want the user to be able to manipulate my character to show my multifaceted interests and various skills, and I wonder if there is a way to ai generate different costumes depending on user input.

Now, my main concern is thinking of how it would visually look. I indicated that I wanted it to look like video editing software, meaning that there will be minimal scrolling and that everything is placed onto one "dashboard screen", so I'm wondering if formatting it would be too difficult. However, it does remind me how we formatted the notecards in lab activities, which is quite straightforward as long as I label my boxes properly, and use appropriate flex properties.
