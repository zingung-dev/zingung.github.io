// 파일 업로드 관련 기능
document.addEventListener('DOMContentLoaded', function() {
    const dropZone = document.querySelector('.chat-input-wrapper');
    const fileInput = document.getElementById('file-upload');
    
    // 파일 선택 처리 함수
    function handleFiles(files) {
        // 여기에 파일 처리 로직 추가
        for(let file of files) {
            console.log('Selected file:', file.name);
            // TODO: 파일 업로드 처리
        }
    }

    // 파일 input 변경 이벤트
    fileInput.addEventListener('change', function(e) {
        handleFiles(this.files);
    });

    // 드래그 앤 드롭 이벤트
    dropZone.addEventListener('dragenter', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.add('dragover');
    });

    dropZone.addEventListener('dragover', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (!this.classList.contains('dragover')) {
            this.classList.add('dragover');
        }
    });

    dropZone.addEventListener('dragleave', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.remove('dragover');
    });

    dropZone.addEventListener('drop', function(e) {
        e.preventDefault();
        e.stopPropagation();
        this.classList.remove('dragover');
        
        const files = e.dataTransfer.files;
        handleFiles(files);
    });
});

// 모달 관련 JavaScript
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');

function openModal(imgSrc) {
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

// X 버튼으로 모달 닫기
document.querySelector('.close-modal').onclick = function() {
    modal.style.display = "none";
}

// 모달 바깥 클릭시 닫기
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// textarea 자동 높이 조절
document.querySelector('.chat-input-wrapper textarea').addEventListener('input', function() {
    this.style.height = '72px';  // 먼저 기본 높이로 리셋
    const newHeight = Math.min(this.scrollHeight, 200);  // 최대 높이 제한
    this.style.height = newHeight + 'px';
}); 