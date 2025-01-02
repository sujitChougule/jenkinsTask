pipeline {
    agent any
    tools {
        nodejs 'nodejs-20.11.0' // Name of the Node.js installation in Jenkins
    }

    environment {
        NODEJS_HOME = 'C:/Program Files/nodejs'  // Set the Node.js path
        SONAR_SCANNER_PATH = 'C:/Users/ADMIN/Downloads/sonar-scanner-cli-6.2.1.4610-windows-x64/sonar-scanner-6.2.1.4610-windows-x64/bin'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checkout code for all repositories
                checkout scm
            }
        }

        stage('Install Dependencies - Frontend') {
            steps {
                dir('frontend') { // Navigate to the frontend directory
                    bat '''
                    set PATH=%NODEJS_HOME%;%PATH%
                    npm install
                    '''
                }
            }
        }

        

        stage('Build - Frontend') {
            steps {
                dir('frontend') {
                    bat '''
                    set PATH=%NODEJS_HOME%;%PATH%
                    npm run build
                    '''
                }
            }
        }

        stage('SonarQube Analysis - Frontend') {
            environment {
                SONAR_TOKEN = credentials('sonar-token') // SonarQube token from Jenkins credentials
            }
            steps {
                dir('frontend') {
                    bat '''
                    set PATH=%SONAR_SCANNER_PATH%;%PATH%
                    where sonar-scanner || echo "SonarQube scanner not found. Please install it."
                    sonar-scanner -Dsonar.projectKey=frontend-task-1 ^ 
                        -Dsonar.sources=. ^ 
                        -Dsonar.host.url=http://localhost:9000 ^ 
                        -Dsonar.token=%SONAR_TOKEN% 2>&1
                    '''
                }
            }
        }

        stage('Install Dependencies - Backend') {
            steps {
                dir('backend') { // Navigate to the first backend directory
                    bat '''
                    set PATH=%NODEJS_HOME%;%PATH%
                    npm install
                    '''
                }
            }
        }

        stage('Build - Backend ') {
            steps {
                dir('backend') {
                    bat '''
                    set PATH=%NODEJS_HOME%;%PATH%
                    npm run build
                    '''
                }
            }
        }

        stage('SonarQube Analysis - Backend 1') {
            environment {
                SONAR_TOKEN = credentials('sonar-token')
            }
            steps {
                dir('backend-1') {
                    bat '''
                    set PATH=%SONAR_SCANNER_PATH%;%PATH%
                    sonar-scanner -Dsonar.projectKey=backend-task-1 ^ 
                        -Dsonar.sources=. ^ 
                        -Dsonar.host.url=http://localhost:9000 ^ 
                        -Dsonar.token=%SONAR_TOKEN% 2>&1
                    '''
                }
            }
        }

    }    

    post {
        success {
            echo 'Pipeline completed successfully for all components.'
        }
        failure {
            echo 'Pipeline failed for one or more components.'
        }
        always {
            echo 'This runs regardless of the result.'
        }
    }
}
