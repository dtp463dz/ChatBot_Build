export const diseases = [
    {
        name: "Tăng huyết áp",
        symptoms: ["Đau đầu", "Chóng mặt", "Mệt mỏi", "Khó thở"],
        causes: ["Di truyền", "Căng thẳng", "Chế độ ăn nhiều muối"],
        treatment: "Kiểm soát bằng thuốc và thay đổi lối sống.",
        department: "Tim mạch",
        commonDrugs: ["Amlodipine", "Losartan", "Perindopril"]
    },
    {
        name: "Tiểu đường tuýp 2",
        symptoms: ["Khát nước", "Tiểu nhiều", "Giảm cân", "Mệt mỏi"],
        causes: ["Kháng insulin", "Chế độ ăn không lành mạnh"],
        treatment: "Ăn kiêng, tập luyện, thuốc kiểm soát đường huyết.",
        department: "Nội khoa",
        commonDrugs: ["Metformin", "Glimepiride", "Januvia"]
    },
    {
        name: "Viêm họng",
        symptoms: ["Đau họng", "Ho khan", "Sốt", "Khó nuốt"],
        causes: ["Virus", "Vi khuẩn"],
        treatment: "Nghỉ ngơi, thuốc hạ sốt, kháng sinh nếu cần.",
        department: "Tai mũi họng",
        commonDrugs: ["Paracetamol", "Amoxicillin", "Cefuroxime"]
    },
    {
        name: "Viêm phế quản",
        symptoms: ["Ho có đờm", "Khó thở", "Sốt nhẹ"],
        causes: ["Virus", "Ô nhiễm không khí", "Hút thuốc"],
        treatment: "Thuốc ho, giãn phế quản, uống nhiều nước.",
        department: "Hô hấp",
        commonDrugs: ["Salbutamol", "Dextromethorphan", "Erdosteine"]
    },
    {
        name: "Hen suyễn",
        symptoms: ["Khò khè", "Khó thở", "Tức ngực", "Ho về đêm"],
        causes: ["Dị ứng", "Không khí lạnh", "Tập thể dục quá sức"],
        treatment: "Dùng ống xịt, tránh dị nguyên, điều trị duy trì.",
        department: "Hô hấp",
        commonDrugs: ["Ventolin", "Symbicort", "Montelukast"]
    },
    {
        name: "Viêm dạ dày",
        symptoms: ["Đau bụng", "Ợ hơi", "Buồn nôn", "Chán ăn"],
        causes: ["H. pylori", "Thuốc NSAIDs", "Stress"],
        treatment: "Thuốc ức chế acid, diệt H. pylori nếu có.",
        department: "Tiêu hóa",
        commonDrugs: ["Omeprazole", "Pantoprazole", "Amoxicillin"]
    },
    {
        name: "Loét dạ dày tá tràng",
        symptoms: ["Đau bụng lúc đói", "Buồn nôn", "Chướng bụng"],
        causes: ["Vi khuẩn H. pylori", "Stress", "Ăn uống thất thường"],
        treatment: "Kháng sinh, thuốc bảo vệ niêm mạc.",
        department: "Tiêu hóa",
        commonDrugs: ["Clarithromycin", "Metronidazole", "Esomeprazole"]
    },
    {
        name: "Viêm đại tràng",
        symptoms: ["Đau bụng", "Đi ngoài nhiều lần", "Tiêu chảy"],
        causes: ["Nhiễm khuẩn", "Stress", "Ăn đồ sống"],
        treatment: "Ăn nhẹ, thuốc chống viêm ruột, probiotics.",
        department: "Tiêu hóa",
        commonDrugs: ["Mesalazine", "Loperamide", "Bifina"]
    },
    {
        name: "Gout",
        symptoms: ["Đau khớp", "Sưng nóng đỏ", "Khó cử động khớp"],
        causes: ["Ăn nhiều đạm", "Rối loạn chuyển hóa acid uric"],
        treatment: "Thuốc giảm acid uric, ăn kiêng, giảm cân.",
        department: "Cơ xương khớp",
        commonDrugs: ["Allopurinol", "Colchicine", "Febuxostat"]
    },
    {
        name: "Thoái hóa khớp",
        symptoms: ["Đau khớp", "Cứng khớp", "Vận động khó khăn"],
        causes: ["Tuổi tác", "Làm việc nặng", "Chấn thương"],
        treatment: "Vật lý trị liệu, thuốc giảm đau, tiêm khớp.",
        department: "Cơ xương khớp",
        commonDrugs: ["Glucosamine", "Paracetamol", "Celecoxib"]
    },
    {
        name: "Trầm cảm",
        symptoms: ["Buồn bã kéo dài", "Mất ngủ", "Chán ăn", "Tự cô lập"],
        causes: ["Stress", "Di truyền", "Mất cân bằng chất dẫn truyền thần kinh"],
        treatment: "Tâm lý trị liệu, thuốc chống trầm cảm.",
        department: "Thần kinh",
        commonDrugs: ["Sertraline", "Fluoxetine", "Duloxetine"]
    },
    {
        name: "Mất ngủ mãn tính",
        symptoms: ["Khó ngủ", "Ngủ không sâu", "Thức dậy sớm"],
        causes: ["Căng thẳng", "Lạm dụng thiết bị điện tử", "Thói quen xấu"],
        treatment: "Thay đổi thói quen, thuốc hỗ trợ giấc ngủ.",
        department: "Thần kinh",
        commonDrugs: ["Melatonin", "Zolpidem", "Diphenhydramine"]
    },
    {
        name: "Viêm gan B",
        symptoms: ["Mệt mỏi", "Vàng da", "Buồn nôn", "Chán ăn"],
        causes: ["Lây qua máu, quan hệ tình dục, từ mẹ sang con"],
        treatment: "Theo dõi định kỳ, thuốc kháng virus.",
        department: "Nội khoa",
        commonDrugs: ["Tenofovir", "Entecavir"]
    },
    {
        name: "Suy giáp",
        symptoms: ["Tăng cân", "Mệt mỏi", "Lạnh", "Trầm cảm"],
        causes: ["Thiếu iod", "Bệnh Hashimoto"],
        treatment: "Bổ sung hormone giáp.",
        department: "Nội tiết",
        commonDrugs: ["Levothyroxine"]
    },
    {
        name: "Basedow (cường giáp)",
        symptoms: ["Gầy sút cân", "Tim đập nhanh", "Lo lắng", "Mắt lồi"],
        causes: ["Rối loạn miễn dịch"],
        treatment: "Thuốc kháng giáp, xạ trị, phẫu thuật.",
        department: "Nội tiết",
        commonDrugs: ["Methimazole", "Propranolol"]
    },
    {
        name: "Viêm đường tiết niệu",
        symptoms: ["Tiểu buốt", "Tiểu rắt", "Sốt nhẹ"],
        causes: ["Vi khuẩn E. coli", "Vệ sinh không đúng cách"],
        treatment: "Uống nhiều nước, dùng kháng sinh.",
        department: "Thận - Tiết niệu",
        commonDrugs: ["Ciprofloxacin", "Nitrofurantoin"]
    },
    {
        name: "Viêm âm đạo",
        symptoms: ["Khí hư bất thường", "Ngứa", "Rát khi tiểu"],
        causes: ["Nấm", "Vi khuẩn", "Trùng roi"],
        treatment: "Thuốc đặt âm đạo, kháng sinh, kháng nấm.",
        department: "Sản phụ khoa",
        commonDrugs: ["Metronidazole", "Clotrimazole"]
    },
    {
        name: "Viêm da cơ địa",
        symptoms: ["Khô da", "Ngứa", "Nứt nẻ", "Viêm đỏ"],
        causes: ["Di truyền", "Dị ứng", "Cơ địa"],
        treatment: "Dưỡng ẩm, corticoid bôi, tránh dị nguyên.",
        department: "Da liễu",
        commonDrugs: ["Hydrocortisone", "Cetirizine", "Tacrolimus"]
    },
    {
        name: "Viêm xoang",
        symptoms: ["Nghẹt mũi", "Đau đầu", "Chảy nước mũi", "Mất khứu giác"],
        causes: ["Vi khuẩn", "Viêm mũi dị ứng", "Lệch vách ngăn mũi"],
        treatment: "Kháng sinh, xịt mũi, phẫu thuật nếu nặng.",
        department: "Tai mũi họng",
        commonDrugs: ["Augmentin", "Xylometazoline", "Montelukast"]
    },
    {
        name: "Thoát vị đĩa đệm",
        symptoms: ["Đau lưng", "Tê chân tay", "Giảm cảm giác"],
        causes: ["Lao động nặng", "Tư thế sai", "Lão hóa"],
        treatment: "Vật lý trị liệu, thuốc giảm đau, phẫu thuật nếu nặng.",
        department: "Cột sống",
        commonDrugs: ["Gabapentin", "Diclofenac", "Paracetamol"]
    }
]