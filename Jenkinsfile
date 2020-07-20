pipeline {
    agent { any { image 'node:14.5.0' } }
    stages {
        stage('build') {
            steps {
                bat 'npm install'
            }
        }
        stage('tests') {
            steps {
                bat 'npm run tests'
            }
        }
    }
}