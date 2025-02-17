const skills = [
    "Machine Learning",
    "Deep Learning",
    "EDA",
    "Tensorflow",
    "Sklearn",
    "Python",
    "Postgres",
    "MySQL",
    "FastAPI",
    "React"
]

const projects = [
    {
        title: "Hybrid Movie Recommender",
        image: "/images/project_1.png",
        frameworks: ["Sklearn", "Numpy", "Pandas", "FastAPI", "React", "Postgres"],
        description: "A hybrid movie recommender system that combines the power of content-based and collaborative filtering techniques to provide personalized movie recommendations to users."
    },
    {
        title: "Whatsapp Chat Analyzer",
        image: "/images/project_2.png",
        frameworks: ["Sklearn", "Pandas", "Streamlit", "Plotly", "Postgres"],
        description: "A web application that analyzes your Whatsapp chat data and provides insights like most active users, most used emojis, most active hours, etc."
    },
    {
        title: "Car Price Predictor",
        image: "/images/project_3.png",
        frameworks: ["Tensorflow", "Sklearn", "FastAPI", "Numpy", "Pandas", "Postgres"],
        description: "A machine learning model that predicts the price of used cars based on features like the model, year of purchase, fuel type, etc."
    }
]

export { skills, projects }