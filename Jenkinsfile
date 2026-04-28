pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/rohitkalal1122/attendance-system.git'
            }
        }

        stage('Clone') {
            steps {
                bat 'echo Cloning repository...'
            }
        }

        stage('Build') {
            steps {
                bat 'echo Building project...'
            }
        }

        stage('Test') {
            steps {
                bat 'echo Running tests...'
            }
        }

        stage('Deploy') {
            steps {
                bat 'xcopy * C:\\xampp\\htdocs\\ /E /H /C /I /Y'
            }
        }
    }
}