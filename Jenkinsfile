pipeline {
    agent any

    environment {
        IMAGE_NAME = 'intranet-portal'
        IMAGE_TAG = '1.0'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build React App') {
            steps {
                dir('intranet-portal') {
                    sh 'npm ci'
                    sh 'npm test -- --watchAll=false'
                    sh 'npm run build'
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh 'kubectl apply -f deployment.yaml -f service.yaml'
                sh 'kubectl rollout status deployment/intranet-portal --timeout=120s'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'intranet-portal/build/**', allowEmptyArchive: true
        }
    }
}