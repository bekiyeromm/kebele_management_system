function addAdditionalOptions() {
    const selectElement = document.getElementById("renewal_status");
    const additionalOptionsContainer = document.getElementById("additional_options");

    // Remove existing additional options before adding new ones
    additionalOptionsContainer.innerHTML = "";

    if (selectElement.value === "active") {
      const waysLabel = document.createElement("label");
      waysLabel.innerHTML = "የሚያዎጣበት መንገድ:";
      additionalOptionsContainer.appendChild(waysLabel);

      const waysSelect = document.createElement("select");
      waysSelect.id = "ways";
      waysSelect.name = "ways";
    //   const defaultt = createOptionElement("የሚያዎጡበትን መንገድ ይምረጡ ...");
      const option1 = createOptionElement("በመሸኛ");
      const option2 = createOptionElement("በትምህርት ማስረጃ");
    //   waysSelect.appendChild(defaultt)
      waysSelect.appendChild(option1);
      waysSelect.appendChild(option2);
      additionalOptionsContainer.appendChild(waysSelect);

      const imageInput = document.createElement("input");
        imageInput.type = "file";
        imageInput.accept = "image/*";
        additionalOptionsContainer.appendChild(imageInput);
    }
  }

  function createOptionElement(text) {
    const option = document.createElement("option");
    option.text = text;
    option.value = text.toLowerCase().replace(/\s+/g, "_"); // Convert text to lowercase and replace spaces with underscores for value attribute
    return option;
  }