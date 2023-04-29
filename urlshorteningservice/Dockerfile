FROM eclipse-temurin:11.0.12_7-jdk
FROM maven:3.9.1-eclipse-temurin-11
VOLUME /tmp
COPY . .
RUN mvn clean
RUN mvn install -DskipTests=True
COPY target/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]