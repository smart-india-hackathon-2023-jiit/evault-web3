// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;



contract EVault {
    struct CaseFile {
        address uploader;
        string ipfsHash;
        string title;
        string dateOfJudgment;
        string caseNumber;
        string category;
        string judgeName;
        uint256 timestamp;
    }

    mapping(uint256 => CaseFile) public caseFiles;
    uint256 public totalCaseFiles;

    event FileUploaded(
        address indexed uploader,
        uint256 indexed fileId,
        string ipfsHash,
        string title,
        string dateOfJudgment,
        string caseNumber,
        string category,
        string judgeName,
        uint256 timestamp
    );

    modifier onlyCourtOfficial() {
        require(isCourtOfficial(msg.sender), 'Only court officials can upload files');
        _;
    }

    function isCourtOfficial(address _address) internal view returns (bool) {
        return _address == msg.sender;
    }

    function uploadFile(
        string memory _ipfsHash,
        string memory _title,
        string memory _dateOfJudgment,
        string memory _caseNumber,
        string memory _category,
        string memory _judgeName
    ) public onlyCourtOfficial {
        totalCaseFiles++;
        caseFiles[totalCaseFiles] = CaseFile(
            msg.sender,
            _ipfsHash,
            _title,
            _dateOfJudgment,
            _caseNumber,
            _category,
            _judgeName,
            block.timestamp
        );

        emit FileUploaded(
            msg.sender,
            totalCaseFiles,
            _ipfsHash,
            _title,
            _dateOfJudgment,
            _caseNumber,
            _category,
            _judgeName,
            block.timestamp
        );
    }

    function searchByTitle(string memory _title) public view returns (uint256[] memory) {
        uint256[] memory matchingFiles = new uint256[](totalCaseFiles);
        uint256 count = 0;

        for (uint256 fileId = 1; fileId <= totalCaseFiles; fileId++) {
            if (keccak256(bytes(caseFiles[fileId].title)) == keccak256(bytes(_title))) {
                matchingFiles[count] = fileId;
                count++;
            }
        }

        return sliceArray(matchingFiles, count);
    }

    function searchByDateRange(string memory _startDate, string memory _endDate)
        public
        view
        returns (uint256[] memory)
    {
        uint256[] memory matchingFiles = new uint256[](totalCaseFiles);
        uint256 count = 0;

        for (uint256 fileId = 1; fileId <= totalCaseFiles; fileId++) {
            if (
                (compareStrings(caseFiles[fileId].dateOfJudgment, _startDate) >= 0) &&
                (compareStrings(caseFiles[fileId].dateOfJudgment, _endDate) <= 0)
            ) {
                matchingFiles[count] = fileId;
                count++;
            }
        }

        return sliceArray(matchingFiles, count);
    }

    function searchByJudgeName(string memory _judgeName) public view returns (uint256[] memory) {
        uint256[] memory matchingFiles = new uint256[](totalCaseFiles);
        uint256 count = 0;

        for (uint256 fileId = 1; fileId <= totalCaseFiles; fileId++) {
            if (keccak256(bytes(caseFiles[fileId].judgeName)) == keccak256(bytes(_judgeName))) {
                matchingFiles[count] = fileId;
                count++;
            }
        }

        return sliceArray(matchingFiles, count);
    }

    function searchByCaseNumber(string memory _caseNumber) public view returns (uint256[] memory) {
        uint256[] memory matchingFiles = new uint256[](totalCaseFiles);
        uint256 count = 0;

        for (uint256 fileId = 1; fileId <= totalCaseFiles; fileId++) {
            if (keccak256(bytes(caseFiles[fileId].caseNumber)) == keccak256(bytes(_caseNumber))) {
                matchingFiles[count] = fileId;
                count++;
            }
        }

        return sliceArray(matchingFiles, count);
    }


    function compareStrings(string memory a, string memory b) internal pure returns (int256) {
        bytes memory ba = bytes(a);
        bytes memory bb = bytes(b);
        uint256 minLength = ba.length;

        if (minLength > bb.length) {
            minLength = bb.length;
        }

        for (uint256 i = 0; i < minLength; i++) {
            if (ba[i] < bb[i]) {
                return -1;
            } else if (ba[i] > bb[i]) {
                return 1;
            }
        }

        if (ba.length < bb.length) {
            return -1;
        } else if (ba.length > bb.length) {
            return 1;
        }

        return 0;
    }


    function sliceArray(uint256[] memory arr, uint256 count) internal pure returns (uint256[] memory) {
        uint256[] memory result = new uint256[](count);
        for (uint256 i = 0; i < count; i++) {
            result[i] = arr[i];
        }
        return result;
    }
}
