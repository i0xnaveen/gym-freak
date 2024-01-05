pipeline {
    agent any
    
    tools {
        jdk 'jdk17'
        nodejs 'node16'
    }
  
    environment {
        SCANNER_HOME = tool 'sonar-scanner'
    }
  
    stages {
        stage("Cleanup Workspace") {
            steps {
                cleanWs()
            }
        }
      
        stage("Checkout from SCM") {
            steps {
                git branch: 'main', credentialsId: 'github', url: 'https://github.com/i0xnaveen/gym-freak'
            }
        }
      
        stage("SonarQube Analysis") {
            steps {
                withSonarQubeEnv('SonarQube-Server') {
                    sh "$SCANNER_HOME/bin/sonar-scanner -Dsonar.projectName=ToDoList-CICD -Dsonar.projectKey=ToDoList-CICD"
                }
            }
        }
      
        stage("Build Application") {
            steps {
                dir('client') {
                    sh "npm install"
                }
            }
        }
      
        stage('TRIVY FS SCAN') {
            steps {
                sh "trivy fs . > trivyfs.txt"
            }
        }
      
        stage("Docker Build and Push") {
            steps {
                script {
                    withDockerRegistry(credentialsId: 'dockerhub', toolName: 'docker') {
                        dir('client') {
                            sh "docker build -t i0xnaveen/gymclient:latest ."
                            sh "docker push i0xnaveen/gymclient:latest"
                        }
                        dir('server') {
                            sh "docker build -t i0xnaveen/gymserver:latest ."
                            sh "docker push i0xnaveen/gymserver:latest"
                        }
                    }
                }
            }
        }
      
        stage("Image Scan") {
            steps {
                sh "trivy image i0xnaveen/gymclient:latest > trivyclientimage.txt"
                sh "trivy image i0xnaveen/gymserver:latest > trivyserverimage.txt"
            }
        }
    }
}
