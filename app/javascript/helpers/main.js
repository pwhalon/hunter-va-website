function showTab(inactiveSectionId) {
    const activeHolderId = "active_section_holder";

    const activeHolderElement = document.getElementById(activeHolderId);
    const activeSectionElement = document.getElementById(activeHolderElement.value);
    const inactiveSectionElement = document.getElementById(inactiveSectionId);


    activeSectionElement.classList.add("hidden")
    inactiveSectionElement.classList.remove("hidden")

    activeHolderElement.value = inactiveSectionId
}

window.showTab = showTab;