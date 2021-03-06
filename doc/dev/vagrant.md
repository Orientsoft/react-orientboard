# 使用Vagrant搭建开发环境

## Dependencies

If you want to use vagrant to set up development environment, you need to install [Vagrant](https://www.vagrantup.com/) and [Virtualbox](https://www.virtualbox.org/). If you're on windows, you also need a command line tool that have a ssh client, like **cygwin** or **Git bash**. Personally I'll recommend [Git bash](https://git-for-windows.github.io/) for its simple installation and usage.

> Note: The parent folder of react-orientboard will be synced to the VM for
> component development, so it's best practice that you clone the project in
> an empty folder.

## Setup Vagrant VM

You can use vagrant to set up a development environment. You need to download the development box and add it.

If you have access to our internal server, use:

```
vagrant box add orientsoft-node-dev http://192.168.0.120:8080/orientsoft-node-dev-0.1.box
```

If you have the box downloaded, use:

```
vagrant box add orientsoft-node-dev /path/to/box
```

On windows:

```
vagrant box add orientsotf-node-dev file:///path/to/box
```

After you add the box to vagrant, use `vagrant up` to start your virtual machine. On windows, make sure you're in Git bash with **administrator permission**.

**On Windows, booting the VM may take quite some time. In case of booting timeout, increase `config.vm.boot_timeout`.**

**For Windows user, the above method is only tested on windows 10, though it should work on win7/8/8.1. If these stuff don't work for you, try [Setup with Docker](docker.md)**

Then run `vagrant ssh` to login the VM. The parent folder of this project is mounted on `/vagrant`.
