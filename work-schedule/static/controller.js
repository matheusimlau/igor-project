// // Auto-scroll controller
const tableContainer = document.getElementById("scrollable-table");
if (tableContainer) {
    const scrollSpeed = 20; // Velocidade do Scroll (menor é mais rápido)
    const resetDelay = 1000; // Delay antes de iniciar um novo ciclo (milisegundos)

    let horizontalScrollWidth = tableContainer.scrollWidth - tableContainer.clientWidth;
    let verticalScrollHeight = tableContainer.scrollHeight - tableContainer.clientHeight;

    let isScrollingHorizontally = true;
    let isScrollingVertically = false;
    let hasCompletedHorizontalScroll = false;
    let hasCompletedVerticalScroll = false;
    let resetCounter = 0;

    function scrollTable() {
        if (isScrollingHorizontally) {
            // Horizontal scroll
            tableContainer.scrollLeft += 1;
            if (tableContainer.scrollLeft >= horizontalScrollWidth) {
                tableContainer.scrollLeft = horizontalScrollWidth;
                hasCompletedHorizontalScroll = true;
                isScrollingHorizontally = false;
                setTimeout(() => {
                    resetScroll();
                }, resetDelay);
            }
        } else if (isScrollingVertically) {
            // Vertical scroll
            tableContainer.scrollTop += 1;
            if (tableContainer.scrollTop >= verticalScrollHeight) {
                tableContainer.scrollTop = verticalScrollHeight;
                hasCompletedVerticalScroll = true;
                isScrollingVertically = false;
                isScrollingHorizontally = true;
            }
        }
    }

    function resetScroll() {
        if (resetCounter % 2 === 0) {
            tableContainer.scrollLeft = 0;
            tableContainer.scrollTop = 0;
            isScrollingVertically = true;
        } else {
            tableContainer.scrollLeft = 0;
            tableContainer.scrollTop = 0;
            isScrollingHorizontally = true;
        }
        resetCounter++;
        if (resetCounter >= 2) {
            resetCounter = 0;
        }
    }

    setInterval(scrollTable, scrollSpeed);
} else {
    console.error('Table container not found');
}

//  Atualiza tela automaticamente (3600000 ms = 1 hour)
setInterval(function() {
    location.reload();
}, 3600000);
