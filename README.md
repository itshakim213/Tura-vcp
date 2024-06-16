# TURA VCP : Video Calling Project

Welcome to the Video Calling Project! This project is a video calling application built using modern web technologies. Below, you'll find information about the project's features, technologies used, and instructions on how to get started.

## Demo

Check out the live demo of the project: [TURA VCP](https://tura-vcp.vercel.app/)

## Features

- High-quality video calls
- User authentication
- Responsive design
- Real-time communication

## Technologies Used

- **Next.js**: A React framework for building fast web applications.
- **TypeScript**: A strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
- **GetStream SDK**: Used for real-time video calling functionality.
- **Clerk**: Provides authentication services.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed on your machine
- npm or yarn package manager

### Installation

1. Clone the repository:

    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/itshakim213/Tura-vcp.git)
    cd Tura-vcp
    ```

2. Install the dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

3. Create a `.env.local` file in the root directory and add your environment variables:

    ```env
    NEXT_PUBLIC_BASE_URL=localhost:4001
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
    CLERK_SECRET_KEY=<your-clerk-secret-key>
    
    NEXT_PUBLIC_STREAM_API_KEY=<your-stream-api-key>
    STREAM_SECRET_KEY=<your-stream-secret-key>
    ```

4. Start the development server:

    ```bash
    npm run dev
    # or
    yarn dev
    ```

5. Open your browser and visit [http://localhost:4001](http://localhost:4001) to see the application in action.

## Usage

Once the application is running, you can:

- Sign up or log in using Clerk authentication.
- Start a video call with other authenticated users.


## Contact

If you have any questions or suggestions, feel free to open an issue in the repository or contact me directly at [hikhlef4@gmail.com].

---

Thank you for checking out the Video Calling Project!
