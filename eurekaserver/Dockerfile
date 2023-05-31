FROM  openjdk:11
EXPOSE 8090
ADD target/eurekaserver-0.0.1-SNAPSHOT.jar eurekaserver.jar
ENTRYPOINT ["java", "-jar", "eurekaserver.jar"]