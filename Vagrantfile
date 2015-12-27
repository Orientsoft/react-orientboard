# -*- mode: ruby -*-
# vi: set ft=ruby :

# change config according to your needs, BUT DON'T COMMIT CHANGES TO THIS FILE UNLESS YOU KNOW WHAT YOU ARE DOING!!!Í
Vagrant.configure(2) do |config|
  config.vm.box = "orientsoft-node-dev"
  config.ssh.insert_key = false
  config.vm.boot_timeout = 600

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
