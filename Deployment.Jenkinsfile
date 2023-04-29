podTemplate(yaml: '''
    apiVersion: v1
    kind: Pod
    spec:
      containers:
      - name: node
        image: node:16-buster
        resources:
          requests: 
            cpu: "1"
            memory: "1Gi"
          limits:
            cpu: "2"
            memory: "4Gi"
        command:
        - sleep
        args:
        - 99d
        volumeMounts: 
        - mountPath: /var/jenkins_home
          name: build
      - name: awscli
        image: amazon/aws-cli:2.7.27
        resources:
          requests: 
            cpu: "0.5" 
            memory: "500Mi"
          limits:
            cpu: "0.5" 
            memory: "500Mi"
        command:
        - sleep
        args:
        - 99d
        volumeMounts: 
        - mountPath: /var/jenkins_home
          name: build
      volumes:
      - name: build
        emptyDir: {}
''') {
  node(POD_LABEL) {
    stage ('Display environment') {
      sh 'env'
    }
    stage('Checkout Code') {
      container('node') {
        checkout([$class: 'GitSCM', branches: [[name: 'prod']], extensions: [], userRemoteConfigs: [[credentialsId: 'vardyng-github-pat', url: 'https://github.com/VardyNg/Portfolio.git']]])
      }
    }

    stage('Install Dependencies') {
      container('node') {
        sh '''
          npm install
        '''
      }
    }

    stage('Build React App') {
      container('node') {
        sh '''
          npm run build
        '''
      }
    }
 

    stage('Sync website to S3') {
      container('awscli') {
        withAWS(credentials: 'AWS-634042005768', region: 'ap-east-1') {
          sh "aws s3 cp ./build s3://vardyng.com --recursive"
          sh "aws s3 cp ./build s3://www.vardyng.com --recursive"
        }
      }
    }
  }
}
