# Dockerfile

# Use a base image with Java pre-installed
FROM openjdk:8-jdk-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the application code to the container
COPY /app2 /app

# Compile the Java program
RUN javac main.java

# Define the command to run the application
CMD ["java", "main"]