<aside class="notifications tip">
  <h3><img src="/static/images/icos/ico-tip.svg" alt=""/>Want to deploy on Kubernetes cluster instead?</h3>
  <p>There are two flavours of Control Plane deployments - Remote and Kubernetes. This guide will focus on deploying a Remote Control Plane on a single Linux remote host. Go to <a href="/docs/platform-deployment/kubernetes-prepare-cluster">Kubernetes - Prepare A Cluster</a> to deploy the Control Plane on Kubernetes Cluster instead.</p>
</aside>

# Remote Host - Deploy Control Plane

Every Edge Compute Network ('ECN') starts with a Control Plane that allows us to manage ECN's resources.

In this guide, our Control Plane will deploy a single Controller instance on a remote host.

<aside class="notifications note">
  <h3><img src="/static/images/icos/ico-note.svg" alt=""/>We use YAML to define ioFog resources</h3>
  <p>The following procedures will define resources in YAML for potctl to consume. Specification of those YAML resources can be found <a href= "/docs/reference-potctl/reference-control-plane">here</a>.</p>
</aside>

## Deploy a Control Plane on a Remote Host

Create a template of controlplane.yaml like so:

```bash
echo "---
apiVersion: datasance.com/v1
kind: ControlPlane
metadata:
  name: albatros
spec:
  iofogUser:
    name: Foo
    surname: Bar
    email: user@domain.com
    password: iht234g9afhe
  controllers:
  - name: alpaca-1
    host: 38.101.23.2
    ssh:
      user: bar
      keyFile: ~/.ssh/id_rsa" > /tmp/controlplane.yaml
```

Make sure to edit the `host`, `ssh.user`, and `ssh.keyFile` fields to correspond with the remote host we are deploying to.

Once we have edited the fields to our liking, go ahead and run:

```bash
potctl deploy -f /tmp/controlplane.yaml
```

## Verify the Deployment

We can use the following commands to verify the Control Plane is up and running:

```bash
potctl get controllers
```

```bash
potctl describe controller alpaca-1
```

```bash
potctl describe controlplane
```

<aside class="notifications tip">
  <h3><img src="/static/images/icos/ico-tip.svg" alt=""/>Where to go from here?</h3>
  <p>Having our Control Plane up and running, we can now go to <a href="/docs/platfomr-deployment/setup-your-agents">Setup Agents</a> guide to deploy our Agents and finalize the ECN deployment.</p>
</aside>

<aside class="notifications contribute">
  <h3><img src="/static/images/icos/ico-github.svg" alt=""/>See anything wrong with the document? Help us improve it!</h3>
  <a href="https://github.com/eclipse-iofog/iofog.org/edit/develop/content/docs/3.0/platform-deployment/remote-control-plane.md"
    target="_blank">
    
  </a>
</aside>
