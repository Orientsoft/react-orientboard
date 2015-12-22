# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure(2) do |config|
  config.vm.box = "orientsoft-node-dev"
  config.ssh.insert_key = false

  # config.vbguest.auto_update = false

  config.vm.provider "virtualbox" do |vb|
    vb.name = "orient"
    # vb.cpus = 2
    vb.memory = "1024"
    vb.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
  end

  config.vm.network :forwarded_port, guest: 3000, host: 3000
  config.vm.synced_folder "..", "/vagrant"
end
