pipeline {
    agent { any { image 'node:14.5.0' } }
    stages {
        stage('build') {
            steps {
                sh 'npm install && npm run build'
            }
        },
        stage('tests') {
            steps {
                sh 'npm run tests'
            }
        }
    }
}