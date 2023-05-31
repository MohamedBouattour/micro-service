FROM  openjdk:11
EXPOSE 8054
ADD target/apigateway-0.0.1-SNAPSHOT.jar apigateway.jar
ENTRYPOINT ["java", "-jar", "apigateway.jar"]