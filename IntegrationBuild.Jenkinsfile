podTemplate(yaml: '''
    cloud: Kubernetes-oracle
    apiVersion: v1
    kind: Pod
    spec:
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
''') {
  node(POD_LABEL) {
    stage('Get branch name') {
      // handle BRANCH_NAME different in PR build and Branch Build
      if (BRANCH_NAME.startsWith('PR')) {
        env.SOURCE_BRANCH_NAME = "${env.CHANGE_BRANCH}"
      } else {
        env.SOURCE_BRANCH_NAME = "${env.BRANCH_NAME}"
      }
      // handle differnet PR targeting branch
      // if CHANGE_TARGET is not set, set it as dev (it is a Branch build)
      if (env.CHANGE_TARGET == null) {
        env.TARGET_BRANCH_NAME = "dev"
      } else { // CHANGE_TARGET is set (PR build)
        // if CHANGE TARGET is not dev, uat, or prod, set it as dev
        if (env.CHANGE_TARGET != "dev" && env.CHANGE_TARGET != "uat" && env.CHANGE_TARGET != "prod") {
          env.TARGET_BRANCH_NAME = "dev"
        } else {
          env.TARGET_BRANCH_NAME = "${env.CHANGE_TARGET}"
        }
      }
    }

    stage('Build React App') {
      container('node') {
        checkout([$class: 'GitSCM', branches: [[name: SOURCE_BRANCH_NAME]], extensions: [], userRemoteConfigs: [[credentialsId: 'vardyng-github-pat', url: 'https://github.com/VardyNg/Portfilio.git']]])
        sh '''
          echo "SOURCE_BRANCH_NAME: $SOURCE_BRANCH_NAME"
          echo "TARGET_BRANCH_NAME: $TARGET_BRANCH_NAME"
          npm install --legacy-peer-deps
          npm run build
        '''
      }
    }
  }
}
