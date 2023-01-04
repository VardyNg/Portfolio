pipeline {
  agent {
    kubernetes {
      cloud 'home-kubernetes'
      yaml '''
        cloud: home-kubernetes
        apiVersion: v1
        kind: Pod
        spec:
          nodeSelector:
            kubernetes.io/os: linux
            kubernetes.io/arch: amd64
          containers:
          - name: node
            image: node:16.17-alpine3.15
            resources:
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
          - name: azurecli
            image: vardyng/azure-cli:latest
            resources:
              limits:
                cpu: "1"
                memory: "1Gi"
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
      '''
    }
  }
  stages {
    stage('Authendicate azure cli') {
      steps {
        container('azurecli') {
          withCredentials([azureServicePrincipal('azure-vardyng1999-gmail-com')]) {
            sh 'env'
            sh 'az login --service-principal -u $AZURE_CLIENT_ID -p $AZURE_CLIENT_SECRET -t $AZURE_TENANT_ID'
          }
        }
      }
    }
    stage('Build React App') {
      steps {
        container('node') {
          checkout([$class: 'GitSCM', branches: [[name: 'dev']], extensions: [], userRemoteConfigs: [[credentialsId: 'vardyng-github-pat', url: 'https://github.com/VardyNg/Portfolio.git']]])
          sh '''
            echo "SOURCE_BRANCH_NAME: $SOURCE_BRANCH_NAME"
            npm install --legacy-peer-deps
            npm run build
          '''
        }
      }
    }
    stage('Deploy to Azure Blob Storage') {
      steps {
        container('azurecli') {
          withCredentials([azureServicePrincipal('azure-vardyng1999-gmail-com')]) {
            sh 'az storage blob upload-batch -d devportfiliosc -s build --account-name devportfiliosa'
          }
        }
      }
    }
  }
}

    