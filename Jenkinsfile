pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/IMPraveenRaj/playwright-sample.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
                sh 'npx playwright install --with-deps'
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
