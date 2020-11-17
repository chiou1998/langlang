function loading(params) {
    let wrap = document.getElementById("i1");
    console.log(params.message)
    wrap.innerHTML = `
    <div class="loading-wait">
                ${params.message}
                <div>
                <svg t="1604829803210" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="972" width="200" height="200"><path d="M512 46.4c0 18.3 15.2 32.8 33.4 32.2 5.9-0.2 11.9-0.3 17.9-0.3 129.2 0 247.3 47.9 337.4 126.9 4.4 3.9 10.5-2.1 6.8-6.6-87.3-105.4-216-175.1-361.1-184.4-18.6-1.1-34.4 13.5-34.4 32.2z m0 931.3c0-18.3-15.2-32.8-33.4-32.2-5.9 0.2-11.9 0.3-17.9 0.3-129.2 0-247.3-47.9-337.4-126.9-4.4-3.9-10.5 2.1-6.8 6.6 87.3 105.2 216 174.9 361.1 184.2 18.6 1.3 34.4-13.4 34.4-32z" p-id="973" fill="#1296db"></path></svg>
            </div>
    `
}