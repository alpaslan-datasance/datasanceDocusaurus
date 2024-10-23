<aside class="notifications tip">
  <h3><img src="/static/images/icos/ico-tip.svg" alt=""/>Not interested in using Kubernetes?</h3>
  <p>There are two flavours of Control Plane deployments - Remote and Kubernetes. This guide will focus on deploying a Remote Control Plane on a Kubernetes cluster. Go to <a href="../platform-deployment/remote-control-plane">Remote - Deploy Control Plane</a> to deploy the Control Plane on a Linux host instead. Keep in mind that in such case, it will be necessary to prepare the host for Controller as well.</p>
</aside>

# Prepare your Kubernetes Cluster

Some components of an Edge Compute Network ('ECN') can be deployed on Kubernetes. These component include Controllers. `potctl` will also install ioFog Operator to assist in the Kubernetes deployed Control Plane. Resources for routing will also be deployed.

The ioFog platform can be installed easily on a managed Kubernetes Cluster provided by e.g. AWS, GCP, or Azure. Minikube is supported as well.

Using lightweight Kubernetes implementations such as MicroK8s or K3s are not fully supported. They will likely fail because those platforms do not assign host or IP addresses to Load Balancer services.

## Kube Config

If we are familiar with `kubectl`, we will know that it relies on a configuration file typically found in `~/.kube/config` which contains credentials for it to connect to the Kubernetes API Server.

`potctl` similarly relies on this configuration file. We need to make sure it is present on the host that we intend to use `potctl` from. The file can be saved anywhere on the host but it is recommended to keep it in `~/.kube/config` because all of this guide's examples assume it to be there.

## RBAC

In order for `potctl` or Helm to do its thing with our Kubernetes cluster, we will have to make sure we have the right [RBAC permissions](https://kubernetes.io/docs/reference/access-authn-authz/rbac/).

The way we add these permissions will depend on our respective Kubernetes provider. Ultimately, we need the User Account associated with our `~/.kube/config` configuration file to have at least the following permissions:

```yaml
Resources                               Verbs
---------                               -----
configmaps                              [*]
persistentvolumeclaims                  [*]
pods                                    [*]
secrets                                 [*]
serviceaccounts                         [*]
services                                [*]
deployments.apps                        [*]
rolebindings.rbac.authorization.k8s.io  [*]
roles.rbac.authorization.k8s.io         [*]
apps.iofog.org                          [list get watch]
controlplanes.iofog.org                 [list get watch]
```

If in doubt, we can use the default cluster role `cluster-admin`.

## Using Google Kubernetes Engine

When using GKE to host our Kubernetes cluster, we need to ensure the [gcloud](https://cloud.google.com/sdk/gcloud/) CLI tool is installed. Once installed, we can connect to our cluster and get the requisite `~/.kube/config` file by running:

```bash
gcloud container clusters get-credentials <NAME> --region <REGION>
```

<aside class="notifications tip">
  <h3><img src="/static/images/icos/ico-tip.svg" alt=""/>Where to go from here?</h3>
  <p>Now that we have the cluster up, we need to deploy the Control Plane onto the cluster. There are two ways to do this, either using potctl, or Helm. To use potctl, go to <a href="../platfomr-deployment/kubernetes-potctl">Kubernetes - Deploy Control Plane Using potctl</a>, or to use Helm, go to <a href="../platfomr-deployment/kubernetes-helm"> Kubernetes - Deploy Control Plane Using Helm</a>.</p>
</aside>