import axios from 'axios';

// مسیر فایل JSON
const JSON_PATH = `${import.meta.env.BASE_URL || '/'}data.json`;

// توابع اصلی (نسخه ساده)
export async function GetCourseOld(): Promise<any[]> {
  try {
    console.log('🔍 دریافت داده‌های 1402 از:', JSON_PATH);
    
    const response = await axios.get(JSON_PATH, {
      params: { _: Date.now() } // جلوگیری از کش
    });
    
    const data = response.data;
    console.log('✅ داده‌ها دریافت شد');
    return data["1402"] || [];
  } catch (error: any) {
    console.error('❌ خطا در دریافت داده 1402:', error.message);
    console.error('URL:', error.config?.url);
    return [];
  }
}

export async function GetCourseNew(): Promise<any[]> {
  try {
    console.log('🔍 دریافت داده‌های 1403 از:', JSON_PATH);
    
    const response = await axios.get(JSON_PATH, {
      params: { _: Date.now() }
    });
    
    const data = response.data;
    console.log('✅ داده‌ها دریافت شد');
    return data["1403"] || [];
  } catch (error: any) {
    console.error('❌ خطا در دریافت داده 1403:', error.message);
    return [];
  }
}

// تابع عمومی
export async function getCoursesByYear(year: string): Promise<any[]> {
  try {
    const response = await axios.get(JSON_PATH);
    return response.data[year] || [];
  } catch (error) {
    console.error(`خطا در دریافت داده‌های ${year}:`, error);
    return [];
  }
}