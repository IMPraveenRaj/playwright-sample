pipeline {
    agent {
        docker {
            image 'mcr.microsoft.com/playwright:focal'
            args '--shm-size=2gb'
        }
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/<your-username>/playwright-sample.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npx playwright test --reporter=junit --output=results'
            }
        }

        stage('Publish Results') {
            steps {
                junit 'results/*.xml'
            }
        }
    }
}
